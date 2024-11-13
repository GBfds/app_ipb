import React from "react";
import { createRestyleComponent, createVariant, VariantProps } from "@shopify/restyle";
import { TouchableOpacity, TouchableOpacityProps  } from "react-native";
import { ThemeProps } from "../../theme";

type CustomButtonProps= 
VariantProps<ThemeProps, "buttonVariants">

type ComponentButtomProps={
    buttonVariant?: CustomButtonProps;
    buttonProps?: TouchableOpacityProps;
    text?: React.JSX.Element;
    icon?: React.JSX.Element;
}

const Box = createRestyleComponent<CustomButtonProps, ThemeProps>([
    createVariant({themeKey: "buttonVariants"})
])

export default function Button({buttonProps, buttonVariant, text, icon}: ComponentButtomProps){
    return(
        <TouchableOpacity {...buttonProps} >
            <Box {...buttonVariant}>
                    {text}
                    {icon}              
            </Box>
        </TouchableOpacity>
    )
}