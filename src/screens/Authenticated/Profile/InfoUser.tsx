import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../../theme";
import BaseScreen from "../../../components/Views/View";

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()
export default function InfoUser(){
    return(
        <BaseScreen>
        <Box flex={1}>
            <Text>Infos</Text>
        </Box>
        </BaseScreen>
    )
}