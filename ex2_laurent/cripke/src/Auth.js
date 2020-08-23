import React, { useEffect, useState } from "react"
import app from "./base.js";

export const AuthContext = React.createContext();
//Crio uma variável global do tipo contexto para que se propague
//por toda a aplicação
//nela vão estar informações sobre o usuário autenticado

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}