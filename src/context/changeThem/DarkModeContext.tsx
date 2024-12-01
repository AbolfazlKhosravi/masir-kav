"use client";

import useLocalStorageState from "@/hooks/useLocalStorageState";
import { createContext, useEffect } from "react";

interface DarkModeContext {
  isDarkMode: boolean;
  setValue: (alue: boolean) => void;
}

export const DarkModeContext = createContext<DarkModeContext | null>(null);

interface DarkModeProvider {
  children: React.ReactNode;
}

function DarkModeProvider({ children }: DarkModeProvider) {
  const [isDarkMode, setValue] = useLocalStorageState<boolean>(
    "isDarkMode",
    false
  );

  useEffect(()=>{
    const item = localStorage.getItem("isDarkMode");
    if (!item) {
      setValue(window.matchMedia("(prefers-color-scheme: dark)").matches )
    }
  },[setValue])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    }
  }, [isDarkMode]);
  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        setValue,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;
