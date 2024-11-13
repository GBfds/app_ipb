import React, { ReactNode } from "react";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { createBox } from "@shopify/restyle";
import { ThemeProps } from "../../theme";


type ViewProps = {
    //canGoBack?: boolean;
    children: ReactNode;
}

const Box = createBox<ThemeProps>()

export default function BaseScreen({children}: ViewProps){
    return(
        <SafeAreaView style={{flex:1}}>
            {children}
        </SafeAreaView>
    )
}