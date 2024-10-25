import { createBox, createText } from "@shopify/restyle";
import React, { useContext, useEffect } from "react";
import { ThemeProps } from "../../theme";
import BaseScreen from "../../components/Views/View";
import Button from "../../components/Buttons/Button";
import { AuthContext } from "../../context/AuthContext";


const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function Home(){
    const {SignOut} = useContext(AuthContext)
    return(
        <BaseScreen>
        <Box flex={1} justifyContent="center" alignItems="center">
            <Text>Home</Text>
            <Button
            buttonVariant={{
                variant: "medium"
            }}
            buttonProps={{
                onPress: SignOut,
            }}
            text={<Text>Sair</Text>}/>
        </Box>
        </BaseScreen>
    )
}