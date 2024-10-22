import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackSignRoutes from "./StackSign.routes";
import { AuthContext } from "../context/AuthContext";
import StackRoutes from "./Stack.routes";
import Loading from "../screens/OthersScreens/Loading";
import DrawerRoutes from "./Drawer.routes";

export default function Routes(){
    const {isAuthenticated, loading} = useContext(AuthContext)

    if (loading){
        return(
            <Loading/>
        )
    }
    return(
        <NavigationContainer>
            {isAuthenticated ?  <DrawerRoutes/> : <StackSignRoutes/>}
        </NavigationContainer>
    )
}