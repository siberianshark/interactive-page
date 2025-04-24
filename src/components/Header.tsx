import { ThemeSwitcher } from './ThemeSwitcher';

export const Header = () => {
  return (
    <header className="w-full px-4 py-3 flex justify-between items-center bg-white dark:bg-gray-800 shadow-sm dark:shadow-md">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">App</h1>
      <ThemeSwitcher />
    </header>
  );
};