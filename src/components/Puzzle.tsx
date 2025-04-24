import { useState } from 'react';
export const Puzzle = () => {
  const [pieces] = useState([
    { id: 1, src: '../assets/10.png', position: { left: 0, top: 0 } },
    { id: 2, src: '../assets/10.png', position: { left: 100, top: 0 } },
    { id: 3, src: '../assets/37.png', position: { left: 0, top: 100 } },
    { id: 4, src: '../assets/image.png', position: { left: 100, top: 100 } },
  ]);

  const [dragging, setDragging] = useState<number | null>(null);

  const handleDragStart = (id: number) => {
    setDragging(id);
  };

  const handleDragEnd = () => {
    setDragging(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetId: number) => {
    e.preventDefault();
    const droppedPiece = pieces.find(piece => piece.id === dragging);
    if (droppedPiece) {
      // Перемещаем кусок пазла на новую позицию
      const newPieces = [...pieces];
      const targetPiece = newPieces.find(piece => piece.id === targetId);
      if (targetPiece) {
        targetPiece.position = droppedPiece.position;
        droppedPiece.position = targetPiece.position;
        setDragging(null);
      }
    }
  };

  return (
    <div className="flex justify-center py-4">
      <div
        className="relative w-[300px] h-[300px] border-2 border-black"
        onDragOver={handleDragOver}
      >
        {pieces.map(piece => (
          <div
            key={piece.id}
            className="absolute cursor-pointer w-[50px] h-[50px]"
            draggable
            onDragStart={() => handleDragStart(piece.id)}
            onDragEnd={handleDragEnd}
            style={{
              left: `${piece.position.left}px`,
              top: `${piece.position.top}px`,
            }}
            onDrop={e => handleDrop(e, piece.id)}
          >
            <img
              src={piece.src}
              alt={`Puzzle piece ${piece.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};