import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackSignRoutes from "./StackSign.routes";
import { AuthContext } from "../context/AuthContext";
import StackRoutes from "./Stack.routes";

export default function Routes(){
    const {isAuthenticated} = useContext(AuthContext)
    return(
        <NavigationContainer>
            {isAuthenticated ?  <StackRoutes/> : <StackSignRoutes/>}
        </NavigationContainer>
    )
}