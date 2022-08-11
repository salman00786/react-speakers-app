import { useContext, } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext"


function Layout({ startingTheme, children }) {
    return (
        <ThemeProvider startingTheme={startingTheme}>
            <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
        </ThemeProvider>
    )
}

function LayoutNoThemeProvider({ children }) {

    const { showTheme } = useContext(ThemeContext);

    return (

        <div className={showTheme === "light" ?
            "container-fluid light" :
            "container-fluid dark"}>
            {children}
        </div>

    )
}

export default Layout;