"use client";

import { useDarkMode } from "@/context/changeThem/DarkModeUseContext";
import { Moon, Sun } from "./Icons";

function DarkModeToggle() {
  const { isDarkMode ,setValue } = useDarkMode();

  return (
    <button onClick={()=>setValue(!isDarkMode)}>
      {isDarkMode ? (
        <Sun width={30} height={30} />
      ) : (
        <Moon width={30} height={30} />
      )}
    </button>
  );
}

export default DarkModeToggle;
