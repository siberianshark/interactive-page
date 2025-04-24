import { useRef, useEffect, useState } from 'react';

export const useDrawingBoard = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('drawing');
    if (saved && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      const img = new Image();
      img.onload = () => ctx?.drawImage(img, 0, 0);
      img.src = saved;
    }
  }, []);

  const startDrawing = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const endDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    const data = canvas?.toDataURL();
    if (data) {
      localStorage.setItem('drawing', data);
    }
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      localStorage.removeItem('drawing');
    }
  };

  const saveToFile = () => {
    const canvas = canvasRef.current;
    const data = canvas?.toDataURL('image/png');
    if (!data) return;
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = data;
    link.click();
  };

  return {
    canvasRef,
    startDrawing,
    draw,
    endDrawing,
    clear,
    saveToFile,
  };
};
