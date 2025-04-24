import { useTheme } from '../hooks/useTheme';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 rounded-md bg-gray-500 dark:bg-gray-700 text-sm text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    >
      {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
    </button>
  );
};
