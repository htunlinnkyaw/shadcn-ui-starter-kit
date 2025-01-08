import { useState } from "react";
import { Button } from "./ui/button";
import { LucideMoon, LucideSun } from "lucide-react";
import { useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Button
      onClick={() => setDarkMode(!darkMode)}
      variant="outline"
      size="icon"
      className="flex bg-transparent rounded-lg text-sky-100 hover:text-sky-100 border-sky-500 hover:bg-sky-800 dark:bg-transparent border-2  dark:text-gray-300 dark:hover:bg-transparent px-4 py-2 active:scale-95  gap-1 items-center"
    >
      {darkMode ? <LucideMoon /> : <LucideSun />}
    </Button>
  );
};

export default DarkModeToggle;
