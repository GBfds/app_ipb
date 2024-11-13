import { createBox, createText } from "@shopify/restyle";
import React, { useEffect, useState } from "react";
import { ThemeProps } from "../../theme";
import BaseScreen from "../../components/Views/View";
import Button from "../../components/Buttons/Button";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import theme from "../../theme";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackBBNavigation, StackBBTypes } from "../../routes/StackBB.routes";
import AntDesign from '@expo/vector-icons/AntDesign';

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
    const [verse, setVerse] = useState<number>(chapter.verse)

    let verses: versesType[] = []

    useEffect(()=> {
        for(let i=0; i< chapter.verses[verse - 1].length; i++){
            verses.push({
                id: String(i+1),
                verse: chapter.verses[verse - 1][i]
            })
        }
    },[verse])

    function PreviousChapter(){
        if(verse > 1){
            setVerse(verse - 1)
        } else{
            return
        }
    }
    function NextChapter(){
        if(verse < chapter.length){
            setVerse(verse + 1)
        } else{
            return
        }
    }


    
    return(
        <BaseScreen>
        <Box width={"100%"} height={56} justifyContent="space-around" alignItems="center"
        flexDirection="row">
            <Button
            buttonVariant={{
                variant: "ListSmall"
            }}
            buttonProps={{
                onPress: PreviousChapter
            }}
            icon={<AntDesign name="leftcircle" size={24} color={verse <= 1? theme.colors.gray : theme.colors.green_800}/>}/>

            <Text variant="title">{chapter.name} {verse}</Text>

            <Button
            buttonVariant={{
                variant: "ListSmall"
            }}
            buttonProps={{
                onPress: NextChapter
            }}
            icon={<AntDesign name="rightcircle" size={24} color={verse == chapter.length? theme.colors.gray : theme.colors.green_800} />}/>
        </Box>
        <Box flex={1} justifyContent="center" alignItems="center">
            <SafeAreaView style={Style.SafeContainer}>
                <FlatList
                data={verses}
                renderItem={({item})=> <Text marginBottom="m">{item.id}. {item.verse}</Text>}
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