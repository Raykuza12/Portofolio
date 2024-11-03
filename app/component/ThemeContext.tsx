"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Context untuk tema global
const ThemeContext = createContext({
  theme: "light", // Default ke 'light'
  setTheme: (theme: string) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  // Ubah atribut 'data-theme' di elemen root saat tema berubah
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook untuk menggunakan tema di komponen lain
export const useTheme = () => useContext(ThemeContext);
