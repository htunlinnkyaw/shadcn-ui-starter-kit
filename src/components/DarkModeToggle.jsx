import { useState } from "react";
import { Button } from "./ui/button";
import { LucideMoon, LucideSun } from "lucide-react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Button
      onClick={toggleDarkMode}
      variant="outline"
      size="icon"
      className="flex bg-transparent rounded-lg text-sky-100 hover:text-sky-100 border-sky-500 hover:bg-sky-800 dark:bg-transparent border-2  dark:text-gray-300 dark:hover:bg-transparent px-4 py-2 active:scale-95  gap-1 items-center"
    >
      {isDark ? <LucideMoon /> : <LucideSun />}
    </Button>
  );
};

export default DarkModeToggle;
