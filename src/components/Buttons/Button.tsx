import React from "react";
import { createRestyleComponent, createVariant, VariantProps } from "@shopify/restyle";
import { StyleSheet, TouchableHighlight, TouchableHighlightProps, TouchableOpacity, TouchableOpacityProps  } from "react-native";
import { ThemeProps } from "../../theme";

type CustomButtonProps= 
VariantProps<ThemeProps, "buttonVariants">

type ComponentButtomProps={
    ButtonVariant?: CustomButtonProps;
    buttonProps: TouchableOpacityProps;
    text?: React.JSX.Element;
}

const Box = createRestyleComponent<CustomButtonProps, ThemeProps>([
    createVariant({themeKey: "buttonVariants"})
])

export default function Button({buttonProps, ButtonVariant, text}: ComponentButtomProps){
    return(
        <Box {...ButtonVariant}>
            <TouchableOpacity {...buttonProps} style={Style.button}>
                {text}
            </TouchableOpacity>
        </Box>
    )
}

const Style = StyleSheet.create({
    button:{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
})