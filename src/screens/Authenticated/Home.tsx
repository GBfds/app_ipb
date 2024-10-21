import { createBox, createText } from "@shopify/restyle";
import React from "react";
import { ThemeProps } from "../../theme";
import BaseScreen from "../../components/Views/View";

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function Home(){
    return(
        <BaseScreen>
        <Box flex={1} justifyContent="center" alignItems="center">
            <Text>Home</Text>
        </Box>
        </BaseScreen>
    )
}