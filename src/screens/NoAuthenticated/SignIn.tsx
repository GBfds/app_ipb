import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { createBox, createText } from "@shopify/restyle";
import {useForm, Controller} from "react-hook-form";
import theme, { ThemeProps } from "../../theme";
import BaseScreen from "../../components/Views/View";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { StackSignTypes } from "../../routes/StackSign.routes";

type FormData ={
    user: string;
    password: string;
}


const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function SignIn(){
    const {SignIn} = useContext(AuthContext)
    const navigation = useNavigation<StackSignTypes>()
    const {control, handleSubmit, formState:{errors}} = useForm<FormData>()
    const [viewAlert, setViewAlert] = useState<boolean>(false)

    async function Submit(data: FormData){
        SignIn({email: `${data.user}@ipb.com`, password: data.password})
    }

    useEffect(()=>{
        setViewAlert(true)
    },[errors])
    return(
        <BaseScreen>
        <Box flex={1} justifyContent="center" alignItems="center" bg="green_20">
            <Box 
            bg="green_40" 
            justifyContent="center" alignItems="center"
            width={"90%"} minHeight={400} elevation={5} borderRadius={8}>
                <Image style={Style.ImageLogo} source={require("../../assets/logo_preta.png")}/>
                <Box width={"90%"} alignItems="flex-start" marginLeft="xx">
                    {viewAlert && <Text variant="messageAlert">{errors.user?.message}</Text>} 
                </Box>
                <Controller
                control={control}
                rules={{
                    required: "Usuário obrigátorio",
                    pattern:{
                        value: /^[A-Za-z0-9]+$/,
                        message: 'Apenas letras e números são permitidos',
                    }
                }}
                name="user"
                render={({field: {value, onChange}})=>(
                    <Input
                    inputProps={{
                        placeholder: "Digite seu Usuário",
                        value: value,
                        onChangeText: onChange
                    }}/>
                )}/>

                <Box width={"90%"} alignItems="flex-start" marginLeft="xx">
                    {viewAlert && <Text variant="messageAlert">{errors.password?.message}</Text>} 
                </Box>
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
                        onChangeText: onChange,
                        secureTextEntry: true
                    }}/>
                )}/>
                <Button
                buttonVariant={{
                    variant: "medium"
                }}
                buttonProps={{
                    onPress: handleSubmit(Submit),
                    style: Style.ButtonLogin
                }}
                text={<Text>Acessar</Text>}/>
            </Box>
            <Box position="absolute" bottom={0} width={"100%"} maxHeight={"8%"}
            bg="green_800" height={80} justifyContent="center" alignItems="center">
                <Button
                buttonVariant={{
                    variant: "transparent"
                }}
                buttonProps={{
                    onPress: ()=> navigation.navigate("SignUp")
                }}
                text={<Text>Cadastre-se</Text>}/>
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
    },
    ButtonLogin:{
        backgroundColor: theme.colors.green_800,
        borderRadius: 8,
        margin: theme.spacing.x
    }
})