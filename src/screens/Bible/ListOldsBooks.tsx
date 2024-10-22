import { createBox, createText } from "@shopify/restyle";
import React, { useContext, useEffect } from "react";
import theme, { ThemeProps } from "../../theme";
import BaseScreen from "../../components/Views/View";
import Button from "../../components/Buttons/Button";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { BibliaARA,OldTestament } from "../../assets/files/ARA";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function ListOldsBooks(){
    
    return(
        <BaseScreen>
            
        <Box flex={1} justifyContent="center" alignItems="center">
            <SafeAreaView style={Style.SafeContainer}> 
                <FlatList
                data={OldTestament}
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

/*<Box width={"100%"} height={60} bg="gray" justifyContent="center" alignItems="center">
                <Button
                ButtonVariant={{
                    variant: "transparent"
                }}
                text={<Box flexDirection="row" flex={1} bg="black">
                    <Text variant="strong" marginRight="x">Novo Testamento</Text>
                    <FontAwesome5 name="arrow-right" size={24} color={theme.colors.green_800} />
                </Box>}/>
            </Box>*/