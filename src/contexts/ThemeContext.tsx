import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";
import type { ReactNode } from "react";

// 1. Определяем тип для контекста
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// 2. Создаем Context с начальным значением
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Определяем пропсы
interface ThemeProviderProps {
  children: ReactNode;
}

// 4. Создаем компонент, который будет оборачивать приложение
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Инициализируем состояние темы. Проверяем localStorage и системные настройки
  const [theme, setTheme] = useState<string>(() => {
    // Пытаемся получить тему из localStorage
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      return savedTheme;
    }
    // Если в localStorage нет, проверяем системные настройки
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Функция для переключения темы
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // useEffect для побочных эффектов: сохранение в localStorage и применение к DOM
  useEffect(() => {
    // Сохраняем тему в localStorage при ее изменении
    localStorage.setItem("portfolio-theme", theme);

    // Устанавливаем атрибут data-theme на корневом html элементе
    // Это нужно для работы CSS-переменных, которые мы определили в index.css
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]); // Зависимость - theme, эффект сработает при ее изменении

  // 5. Возвращаем провайдер с value (текущая тема и функция переключения)
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 6. Создаем кастомный хук для удобного использования контекста
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  // Защита от использования хука вне провайдера
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
