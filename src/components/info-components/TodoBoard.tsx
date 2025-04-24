import { useTodo } from "../../hooks/useTodo";

export const TodoBoard = () => {
  const { tasks, input, setInput, addTask, removeTask } = useTodo();

  return (
    <div className="flex-1 p-4 rounded-xl bg-white dark:bg-gray-800 shadow">
      <h2 className="text-lg font-semibold mb-4">📋 Мой список дел</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 px-3 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
          placeholder="Новая задача..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={addTask}
        >
          Добавить
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, i) => (
          <li key={i} className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-700 rounded">
            <span>{task}</span>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => removeTask(i)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};