import { createBox } from "@shopify/restyle";
import React, { ReactNode } from "react";
import { ThemeProps } from "../../theme";


type ViewProps = {
    canGoBack?: boolean;
    children: ReactNode;
}

const Box = createBox<ThemeProps>()

export default function BaseScreen({children, canGoBack = false}: ViewProps){
    return(
        <Box flex={1}>
            {children}
        </Box>
    )
}