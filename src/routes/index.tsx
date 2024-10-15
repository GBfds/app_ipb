import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import theme from "../theme";
import { View } from "react-native";
import SignIn from "../screens/NoAuthenticated/SignIn";

export default function Routes(){
    return(
        <SignIn/>
    )
}