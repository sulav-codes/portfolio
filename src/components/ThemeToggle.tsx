"use client";

import { useTheme } from "next-themes";
import { startTransition } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const handleChange = (checked: boolean) => {
    startTransition(() => {
      setTheme(checked ? "dark" : "light");
    });
  };

  return (
    <div className="toggle-wrapper">
      <label className="ts-label" aria-label="Toggle theme">
        <input
          id="ts-checkbox"
          className="ts-input"
          type="checkbox"
          checked={isDark}
          onChange={(e) => handleChange(e.target.checked)}
        />
        <div className="ts-slider ts-round">
          <div className="ts-sun-moon">
            <svg className="ts-moon-dot" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg className="ts-moon-dot" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg className="ts-moon-dot" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg className="ts-ray ts-ray-1" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg className="ts-ray ts-ray-2" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg className="ts-ray ts-ray-3" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg
              className="ts-cloud ts-cloud-dark ts-cloud-1"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg
              className="ts-cloud ts-cloud-dark ts-cloud-2"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg
              className="ts-cloud ts-cloud-dark ts-cloud-3"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg
              className="ts-cloud ts-cloud-light ts-cloud-4"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg
              className="ts-cloud ts-cloud-light ts-cloud-5"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg
              className="ts-cloud ts-cloud-light ts-cloud-6"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>
          <div className="ts-stars">
            <svg className="ts-star ts-star-1" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg className="ts-star ts-star-2" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg className="ts-star ts-star-3" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg className="ts-star ts-star-4" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
          </div>
        </div>
      </label>
    </div>
  );
}
