import React from "react";
import { createBox } from "@shopify/restyle";
import { ActivityIndicator } from "react-native";

import BaseScreen from "../../components/Views/View";
import theme from "../../theme";
import { ThemeProps } from "../../theme";

const Box = createBox<ThemeProps>()

export default function Loading(){
    
    return(
        <BaseScreen>
        <Box flex={1} justifyContent="center" alignItems="center" bg="green_20">
            <ActivityIndicator size={75} color={theme.colors.green_800}/>
        </Box>
        </BaseScreen>
    )
}