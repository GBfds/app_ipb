import React from "react";
import { createRestyleComponent, createVariant, VariantProps } from "@shopify/restyle";
import { TouchableOpacity, TouchableOpacityProps  } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import theme, { ThemeProps } from "../../theme";

type CustomButtonProps= 
VariantProps<ThemeProps, "buttonVariants">

type ComponentButtomProps={
    buttonVariant?: CustomButtonProps;
    buttonProps?: TouchableOpacityProps;
    text?: React.JSX.Element;
    icon?:{
        icon?: keyof typeof AntDesign.glyphMap;
        iconColor?: string;
        sizeIcon?: number;
    };
}

const Box = createRestyleComponent<CustomButtonProps, ThemeProps>([
    createVariant({themeKey: "buttonVariants"})
])

export default function Button({buttonProps, buttonVariant, text, icon}: ComponentButtomProps){
    return(
        <TouchableOpacity {...buttonProps} >
            <Box {...buttonVariant}>
                    {text}
                    {icon?.icon && <AntDesign color={icon.iconColor} name={icon.icon} size={icon.sizeIcon}/>}              
            </Box>
        </TouchableOpacity>
    )
}