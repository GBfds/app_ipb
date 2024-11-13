import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackSignRoutes from "./StackSign.routes";
import { AuthContext } from "../context/AuthContext";
import Loading from "../screens/OthersScreens/Loading";
import DrawerRoutes from "./Drawer.routes";
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function Routes(){
    const {isAuthenticated, loading} = useContext(AuthContext)

    if (loading){
        return(
            <Loading/>
        )
    }
    return(
        <NavigationContainer>
        <SafeAreaProvider>
            {isAuthenticated ?  <DrawerRoutes/> : <StackSignRoutes/>}
        </SafeAreaProvider>
        </NavigationContainer>
    )
}