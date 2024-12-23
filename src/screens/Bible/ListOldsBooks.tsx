import { createBox, createText } from "@shopify/restyle";
import React from "react";
import theme, { ThemeProps } from "../../theme";
import BaseScreen from "../../components/Views/View";
import Button from "../../components/Buttons/Button";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { OldTestament } from "../../assets/files/ARA";
import { useNavigation } from "@react-navigation/native";
import { StackBBTypes } from "../../routes/StackBB.routes";
import AntDesign from '@expo/vector-icons/AntDesign';

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function ListOldsBooks(){
    const navigation = useNavigation<StackBBTypes>()
    
    return(
        <BaseScreen>
            <Box width={"100%"} height={60} bg="gray" justifyContent="center" alignItems="center">
                <Button
                buttonVariant={{
                    variant: "largeWithIcon"
                }}
                buttonProps={{
                    onPress: ()=> navigation.navigate("ListNewsBooks")
                }}
                text={<Text variant="medium" marginRight="x">Novo Testamento</Text>}
                icon={<AntDesign name="arrowright" size={24} color={theme.colors.green_800} />}/>
            </Box>
            
        <Box flex={1} justifyContent="center" alignItems="center" >
            <SafeAreaView style={Style.SafeContainer}> 
                <FlatList
                data={OldTestament}
                renderItem={({item})=> 
                    <Button
                    buttonVariant={{
                        variant: "LargeAlignStart"
                    }}
                    buttonProps={{
                        onPress: ()=> navigation.navigate("ListChapters", item),
                        style: Style.ButtonList
                    }}
                    text={<Text>{item.name}</Text>}/>
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
    },
    ButtonList:{
        borderRadius: 8,
        backgroundColor: theme.colors.gray,
        marginVertical: theme.spacing.m
    }
})

