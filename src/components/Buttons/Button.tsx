import React from "react";
import { createRestyleComponent, createVariant, VariantProps } from "@shopify/restyle";
import { StyleSheet, TouchableHighlight, TouchableHighlightProps, TouchableOpacity, TouchableOpacityProps  } from "react-native";
import theme, { ThemeProps } from "../../theme";

type CustomButtonProps= 
VariantProps<ThemeProps, "buttonVariants">

type ComponentButtomProps={
    ButtonVariant?: CustomButtonProps;
    buttonProps?: TouchableOpacityProps;
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
        flex:1,
        backgroundColor: theme.colors.green_1000,
        justifyContent: "center",
        alignItems: "center",
    }
})