import React, { createElement } from "react";
import { createRestyleComponent, createVariant, VariantProps } from "@shopify/restyle";
import { TextInput, TextInputProps } from "react-native";
import { ThemeProps } from "../../theme";

type CustomTextInputProps = 
VariantProps<ThemeProps, "inputVariants">

type ComponentProps={
    inputProps: TextInputProps;
    componentProps?: CustomTextInputProps;
    message?: string
}

const Box = createRestyleComponent<CustomTextInputProps, ThemeProps>([
    createVariant({themeKey: "inputVariants"})
])

export default function Input({componentProps, inputProps, message}: ComponentProps){
    return(
        <Box {...componentProps}>
            <TextInput style={{width: "100%", height: "100%"}} {...inputProps}/>
        </Box>
    )
}