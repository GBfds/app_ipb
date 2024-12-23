import React, { createContext, ReactNode, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, db } from "../config/firebase";
import { addDoc, collection, getDocs, limit, query, where } from "firebase/firestore";

type AuthContextData={
    user: userProps;
    isAuthenticated: boolean;
    loading: boolean;
    SignIn: (credentials: SignProps)=> Promise<void>;
    SignUp: (credentials: SignProps)=> Promise<void>;
    SignOut: ()=> Promise<void>;
    getInfosUserDb: ()=> Promise<void>;
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

    const [loading, setLoading] = useState<boolean>(true)
    const isAuthenticated = !!user.userID

    useEffect(()=>{
        GetUserLocalStorage()
    },[])

    //Busca se existe as informações localmente de um usuario logado
    async function GetUserLocalStorage(){
        setLoading(true)
            const LocalUserInfos = await AsyncStorage.getItem("@UserAuthData")
            let hasUser: userProps = JSON.parse(LocalUserInfos || "{}")

            if(Object.keys(hasUser).length > 0){
                setUser({
                    id: hasUser.id,
                    userID: hasUser.userID,
                    email: hasUser.email,
                    name: hasUser.name,
                    surname: hasUser.surname,
                    birthday: hasUser.birthday,
                    admin: hasUser.admin,
                    contactEmail: hasUser.contactEmail,
                    contactPhone: hasUser.contactPhone,
                })
            }
        setLoading(false)
    }

    //Define as informações localmente do usuario recem logado ou autoaliza as dados locais
    async function SetUserLocalStorage(user: userProps){
        await AsyncStorage.setItem("@UserAuthData", JSON.stringify(user))
        setUser(user)
    }

    async function getInfosUserDb(){
        const userRef = collection(db, "users")
        const q = query(userRef, where("userID", "==", user.userID), limit(1));

        await getDocs(q).then((userData)=>{
            userData.forEach((doc)=>{
                SetUserLocalStorage({
                    id: doc.id,
                    userID: doc.data().userID,
                    name: doc.data().name,
                    admin: doc.data().admin,
                    birthday: doc.data().birthday,
                    contactEmail: doc.data().contactEmail,
                    contactPhone: doc.data().contactPhone,
                    email: doc.data().email,
                    surname: doc.data().surname,                    
                })
                
            })
            
        }).catch(()=>{
            console.log("erro ao buscar");
        })
    }

    //Realiza o login no banco de dados e set as informações com o "SetUserLocalStorage"
    async function SignIn({email, password}:SignProps) {
        if(loading != true){
            setLoading(true)
        }

        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            SetUserLocalStorage({
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
            setLoading(false)
            
        }).catch(()=>{
            setLoading(false)
            alert("Não foi possivel fazer Login. se o erro persistir entre em contato com o Administrador")
        })

    }

    //Inicia os dados de um usuario recem criado no banco de dados
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

    //Cria um novo usuario, inicia seus dados no DB com o "InitInfosUser" e após faz o login "SignIn"
    async function SignUp({email, password}: SignProps) {
        setLoading(true)

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            InitInfosUser(userCredential.user.uid, email)
            SignIn({email: email, password: password})
        }).catch(()=>{
            alert("Erro ao cadastrar usuário, se o erro persistir entre em contato com o Suporte")
            setLoading(false)
        })

    }

    // apagos o dados locais e temporarios para sair do perfil logado
    async function SignOut() {
        setLoading(true)
        setUser({
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

        AsyncStorage.setItem("@UserAuthData", "{}")

        setLoading(false)
    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, loading, SignIn, SignUp, SignOut, getInfosUserDb}}>
            {children}
        </AuthContext.Provider>
    )
}