import { createBox, createText } from "@shopify/restyle";
import React, { useEffect, useState } from "react";
import { ThemeProps } from "../../theme";
import BaseScreen from "../../components/Views/View";
import Button from "../../components/Buttons/Button";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import theme from "../../theme";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackBBNavigation, StackBBTypes } from "../../routes/StackBB.routes";

import Loading from "../OthersScreens/Loading";

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

type RouteProps = RouteProp<StackBBNavigation, "Chapter">

type versesType = {
    id: string;
    verse: string;
}

export default function Chapters(){
    const navigation = useNavigation<StackBBTypes>()
    const route = useRoute<RouteProps>()
    const chapter = route.params

    let verses: versesType[] = []

    useEffect(()=> {
        for(let i=0; i< chapter.verses.length; i++){
            verses.push({
                id: String(i+1),
                verse: chapter.verses[i]
            })
        }
    },[])

    
    return(
        <BaseScreen>
        <Box width={"100%"} height={56} justifyContent="center" alignItems="center">
            <Text variant="title">{chapter.name} {chapter.number}</Text>
        </Box>
        <Box flex={1} justifyContent="center" alignItems="center">
            <SafeAreaView style={Style.SafeContainer}>
                <FlatList
                data={verses}
                renderItem={({item})=> <Text variant="text" marginBottom="m">{item.id}. {item.verse}</Text>}
                style={Style.FlatList}/>
            </SafeAreaView>
            
        </Box>
        </BaseScreen>
    )
}

const Style = StyleSheet.create({
    SafeContainer:{
        flex: 1,
        width: "100%",
        padding: 12,
    },
    FlatList:{
        padding: 12,
        width: "100%",
    }
})