import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

type AuthContextData={
    user: userProps;
    isAuthenticated: boolean;
    loading: boolean;
    SignIn: (credentials: SignProps)=> Promise<void>;
    SignUp: (credentials: SignProps)=> Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode;
}

type userProps={
    id: string;
    userID: string;
    email: string;
    name: string;
    surname: string;
    birthday: Date;
    admin: boolean;
    contactEmail: string;
    contactPhone: string;
}

type SignProps={
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextData)

export default function AuthProvider({children}: AuthProviderProps){

    const [user, setUser] = useState<userProps>({
        id: "",
        userID: "",
        email: "",
        name: "",
        surname: "",
        birthday: new Date,
        admin: false,
        contactEmail: "",
        contactPhone: "",
    })

    const [loading, setLoading] = useState<boolean>(false)
    const isAuthenticated = !!user.userID

    async function SignIn({email, password}:SignProps) {
        setLoading(true)

        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            setUser({
                id: "",
                userID: userCredential.user.uid,
                email: email,
                name: "",
                surname: "",
                birthday: new Date,
                admin: false,
                contactEmail: "",
                contactPhone: "",
            })
            
        })

        setLoading(false)
    }

    async function InitInfosUser(id: string, email: string){
        addDoc(collection(db, "users"),{
            userID: id,
            email: email,
            name: "",
            surname: "",
            birthday: new Date(),
            admin: false,
            contactEmail: "",
            contactPhone: "",
        })
    }

    async function SignUp({email, password}: SignProps) {
        setLoading(true)

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            InitInfosUser(userCredential.user.uid, email)
            SignIn({email: email, password: password})
        }).catch(()=>{
            alert("Erro ao cadastrar usuário, se o erro persistir entre em contato com o Suporte")
        })

        setLoading(false)
    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, loading, SignIn, SignUp}}>
            {children}
        </AuthContext.Provider>
    )
}