import React, { useContext, useEffect } from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../../theme";
import BaseScreen from "../../../components/Views/View";
import { AuthContext } from "../../../context/AuthContext";

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()
export default function InfoUser(){
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        
    })
    return(
        <BaseScreen>
        <Box flex={1} padding="x">
            <Text variant="medium">Id: {user.userID}</Text>
            <Text variant="medium">Nome: {user.name}</Text>
            <Text variant="medium">Nascimento: {user.birthday.toLocaleDateString("pt-BR")}</Text>
            <Text variant="medium">Apelido: {user.surname}</Text>
            <Text variant="medium">Email: {user.contactEmail}</Text>
            <Text variant="medium">Telefone: {user.contactPhone}</Text>
        </Box>
        </BaseScreen>
    )
}