import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { createBox, createText } from "@shopify/restyle";
import {useForm, Controller} from "react-hook-form";
import { ThemeProps } from "../../theme";
import BaseScreen from "../../components/Views/View";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";

type FormData ={
    email: string;
    password: string;
}

type MessagesError ={
    email: string | undefined;
    password: string | undefined;
}

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function SignIn(){
    const {control, handleSubmit, formState:{errors}} = useForm<FormData>()

    function Submit(data: FormData){
        console.log(data);
        
    }


    return(
        <BaseScreen>
        <Box flex={1} justifyContent="center" alignItems="center" bg="green_20">
            <Box 
            bg="green_40" 
            justifyContent="center" alignItems="center"
            width={"90%"} minHeight={400} elevation={5} borderRadius={8}>
                <Image style={Style.ImageLogo} source={require("../../assets/logo_preta.png")}/>

                <Controller
                control={control}
                rules={{
                    required: "Email obrigátorio"
                }}
                name="email"
                render={({field: {value, onChange}})=>(
                    <Input
                    inputProps={{
                        placeholder: "Digite seu Email",
                        value: value,
                        onChangeText: onChange
                    }}/>
                )}/>

                <Controller
                control={control}
                name="password"
                rules={{
                    required: "Senha obrigátoria"
                }}
                render={({field: {value, onChange}})=>(
                    <Input
                    inputProps={{
                        placeholder: "Digite sua Senha",
                        value: value,
                        onChangeText: onChange
                    }}/>
                )}/>
                
                <Button
                buttonProps={{
                    onPress: handleSubmit(Submit)
                }}
                text={<Text>Acessar</Text>}/>
            </Box>
        </Box>
        </BaseScreen>
    )
}

const Style = StyleSheet.create({
    ImageLogo:{
        width: "90%",
        resizeMode: "contain",
        marginVertical: 28,
    }
})