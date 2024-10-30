import { createBox, createText } from "@shopify/restyle";
import React, { useContext, useEffect, useState } from "react";
import theme, { ThemeProps } from "../../../theme";
import BaseScreen from "../../../components/Views/View";
import Button from "../../../components/Buttons/Button";
import { AuthContext } from "../../../context/AuthContext";
import { Modal, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackProfileTypes } from "../../../routes/StackProfile.routes";


const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function HomeProfile(){
    const {SignOut} = useContext(AuthContext)
    const [modalLogoutVisible, setModalLogoutVisible] = useState(false);
    const navigation = useNavigation<StackProfileTypes>()
    return(
        <BaseScreen>
        <Box flex={1} justifyContent="flex-start" alignItems="center" bg="green_20" p="x">
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalLogoutVisible}
            onRequestClose={()=>{
                setModalLogoutVisible(!modalLogoutVisible)
            }}>
                <Box
                flex={1}
                justifyContent="center"
                alignItems="center">
                    <Box
                    width={"70%"}
                    minHeight={150}
                    margin="x"
                    backgroundColor="green_20"
                    borderRadius= {20}
                    padding= "x"
                    alignItems= "center"
                    elevation= {5}>
                        <Text variant="medium">Sair do App?</Text>
                        <Box flexDirection="row">
                            <Button
                            buttonVariant={{
                                variant: "ListSmall"
                            }}
                            buttonProps={{
                                style: [Style.ButtonConfirm, {backgroundColor: theme.colors.gray}],
                                onPress: SignOut
                            }}
                            text={<Text>Sair</Text>}/>
                            <Button
                            buttonVariant={{
                                variant: "ListSmall"
                            }}
                            buttonProps={{
                                style: [Style.ButtonConfirm, {backgroundColor: theme.colors.green_800}],
                                onPress: ()=> setModalLogoutVisible(!modalLogoutVisible)
                            }}
                            text={<Text>Voltar</Text>}/>

                        </Box>

                    </Box>
                </Box>
            </Modal>

            <Box
            elevation={5}
            width={"100%"}
            borderRadius={8}
            bg="green_20"
            marginVertical="m">
                <Button
                buttonVariant={{
                    variant: "LargeAlignEnd"
                }}
                buttonProps={{
                    onPress: ()=> navigation.navigate("InfoUser")
                }}
                text={<Text variant="medium">Perfil</Text>}/>
                <Button
                buttonVariant={{
                    variant: "LargeAlignEnd"
                }}
                text={<Text variant="medium">Suporte</Text>}/>
            
            </Box>

            <Box
            elevation={5}
            width={"100%"}
            minHeight={50}
            borderRadius={8}
            bg="green_250"
            marginVertical="m">

            <Button
            buttonVariant={{
                variant: "LargeAlignEnd"
            }}
            buttonProps={{
                onPress: ()=> setModalLogoutVisible(!modalLogoutVisible)
            }}
            text={<Text>Sair</Text>}/>
            </Box>
        </Box>
        </BaseScreen>
    )
}

const Style = StyleSheet.create({
    ButtonConfirm:{
        margin: 24,
        borderRadius: 6
    }
})