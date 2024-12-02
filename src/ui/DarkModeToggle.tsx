"use client";

import { useDarkMode } from "@/context/changeThem/DarkModeUseContext";
import { Moon, Sun } from "./Icons";

function DarkModeToggle() {
  const { isDarkMode, setValue } = useDarkMode();

  return (
    <button onClick={() => setValue(!isDarkMode)}>
      {isDarkMode ? (
        <Sun width={35} height={35} />
      ) : (
        <Moon width={35} height={35} />
      )}
    </button>
  );
}

export default DarkModeToggle;
