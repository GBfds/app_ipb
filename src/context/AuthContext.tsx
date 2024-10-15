import React, { createContext, ReactNode, useState } from "react";

type AuthContextData={
    user: userProps;
    isAutheticated: boolean;
}

type AuthProviderProps = {
    children: ReactNode;
}

type userProps={
    name: string;
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextData)

export default function AuthProvider({children}: AuthProviderProps){

    const [user, setUser] = useState<userProps>({
        name: "gb",
        email: "",
        password: ""
    })
    const isAutheticated = false
    return(
        <AuthContext.Provider value={{user, isAutheticated}}>
            {children}
        </AuthContext.Provider>
    )
}