import React, { useContext, useEffect, useState } from "react";
import { createBox, createText } from "@shopify/restyle";
import theme, { ThemeProps } from "../../../theme";
import BaseScreen from "../../../components/Views/View";
import { AuthContext } from "../../../context/AuthContext";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Loading from "../../OthersScreens/Loading";


const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()
export default function InfoUser(){
    const {user, getInfosUserDb} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        const getDb = async ()=>{
            await getInfosUserDb()
        }
        getDb()
        setLoading(false)        
    })

    if(loading){
        return(
            <Loading/>
        )
    }
    return(
        <BaseScreen>
        <Box flex={1} padding="x" alignItems="center">
            <Box width={100} height={100} justifyContent="center" alignItems="center" p="x"
            borderRadius={60} borderColor="green_800" borderWidth={2}>
                <Feather name="user" size={56} color={theme.colors.black} />
            </Box>

            <Box width={"96%"} minHeight={56} bg="gray" justifyContent="center" alignItems="center"
            marginVertical="x" p="m" borderRadius={8} elevation={5}>
                <Text variant="medium" marginBottom="s">ID do usuário</Text>
                {<Text variant="small" marginBottom="s">{user.userID}</Text>}
                <Text variant="medium" marginBottom="s">Nome</Text>
                {user.name.length == 0 ? <Text marginBottom="s">___________</Text> : <Text marginBottom="s">{user.name}</Text>}
            </Box>
            <Box width={"96%"} minHeight={56} bg="gray" justifyContent="center" alignItems="center"
            marginVertical="x" p="x" borderRadius={8} elevation={5}>
                <Box width={"100%"} flexDirection="row" justifyContent="space-between" marginVertical="s">
                    <FontAwesome5 name="user-secret" size={22} color="black" />
                    <Text variant="small">{user.surname}</Text>
                </Box>
                <Box width={"100%"} flexDirection="row" justifyContent="space-between" marginVertical="s">
                    <MaterialIcons name="alternate-email" size={22} color="black" />
                    <Text variant="small">{user.contactEmail}</Text>
                </Box>
                <Box width={"100%"} flexDirection="row" justifyContent="space-between" marginVertical="s">
                    <Feather name="phone" size={22} color="black" />
                    <Text variant="small">{user.contactPhone}</Text>
                </Box>
                <Box width={"100%"} flexDirection="row" justifyContent="space-between" marginVertical="s">
                    <FontAwesome5 name="birthday-cake" size={22} color="black" />
                    <Text variant="small"></Text>
                </Box>
            </Box>
        </Box>
        </BaseScreen>
    )
}