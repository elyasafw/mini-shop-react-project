import { useState } from "react";

interface Theme {
    theme: "light" | "dark";
    themeToggle: () => void;
}

const ThemeToggle = () => {
    const [theme, setTheme] = useState<Theme["theme"]>("light");
    const themeToggle = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
        document.body.classList.toggle("dark");
    };
    return (
        <>
            <button onClick={themeToggle}>
                {theme === "light" ? "☀️" : "🌙"}
            </button>
        </>
    );
};

export default ThemeToggle;
