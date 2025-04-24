import { useDrawingBoard } from "../../hooks/useDrawingBoard";

export const DrawingBoard = () => {
  const {
    canvasRef,
    startDrawing,
    draw,
    endDrawing,
    clear,
    saveToFile,
  } = useDrawingBoard();

  return (
    <div className="flex-1 flex flex-col gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
      <h2 className="text-lg font-semibold">🎨 Доска для рисования</h2>
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="border border-gray-400 rounded cursor-crosshair bg-white"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
      />
      <div className="flex gap-1">
        <button
          className="px-2 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={clear}
        >
          Очистить
        </button>
        <button
          className="px-2 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={saveToFile}
        >
          Скачать
        </button>
      </div>
    </div>
  );
};