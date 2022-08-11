import React, { createContext, useState } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext();


function ThemeProvider({ children, startingTheme }) {

    const [showTheme, setShowTheme] = useState(startingTheme);

    return (
        <ThemeContext.Provider
            value={{ showTheme, setShowTheme }}>
            {children}

        </ThemeContext.Provider>

    )
}

export { ThemeProvider };