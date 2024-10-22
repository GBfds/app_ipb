import { createBox, createText } from "@shopify/restyle";
import React, { useContext, useEffect } from "react";
import { ThemeProps } from "../../theme";
import BaseScreen from "../../components/Views/View";
import Button from "../../components/Buttons/Button";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { BibliaARA, NewTestament} from "../../assets/files/ARA";

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function ListNewsBooks(){
    
    return(
        <BaseScreen>
        <Box flex={1} justifyContent="center" alignItems="center">
            <SafeAreaView style={Style.SafeContainer}> 
                <FlatList
                data={NewTestament}
                renderItem={({item})=> 
                    <Button
                    ButtonVariant={{
                        variant: "List"
                    }}
                    buttonProps={{
                        
                    }}
                    text={<Text variant="strong">{item.name}</Text>}/>
                }
                keyExtractor={item=> item.abbrev}
                style={Style.FlatList}/>
            </SafeAreaView>
            
        </Box>
        </BaseScreen>
    )
}

const Style = StyleSheet.create({
    SafeContainer:{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    FlatList:{
        padding: 12,
        width: "100%",
    }
})