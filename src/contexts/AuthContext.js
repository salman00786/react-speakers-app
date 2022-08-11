import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children, initialLoggedInUser }) {
    const [loggedIn, setLoggedIn] = useState(initialLoggedInUser);
    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>{children}</AuthContext.Provider>
    )
}

export { AuthProvider };