import { useEffect } from "react";
import { useTextEditor } from "../../hooks/useTextEditor";

export const TextEditor = () => {
  const { editorRef, formatText, saveText, loadText } = useTextEditor();

  useEffect(() => {
    loadText();
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-1 p-1 bg-white dark:bg-gray-800 rounded-xl shadow">
      <h2 className="text-lg font-semibold">📝 Текстовый редактор</h2>
      <div className="flex gap-2 mb-2">
        <button
          className="px-1 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => formatText('bold')}
        >
          Жирный
        </button>
        <button
          className="px-1 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => formatText('italic')}
        >
          Курсив
        </button>
        <button
          className="px-1 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          onClick={() => formatText('underline')}
        >
          Подчеркнутый
        </button>
        <button
          className="px-1 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => formatText('strikeThrough')}
        >
          Зачеркнутый
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        className="border border-gray-400 p-4 rounded min-h-[200px] text-black dark:text-white bg-white dark:bg-gray-700"
      ></div>
      <div className="flex gap-2 mt-4">
        <button
          className="px-1 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={saveText}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};