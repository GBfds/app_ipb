import { createBox, createText } from "@shopify/restyle";
import React, { useEffect, useState } from "react";
import { ThemeProps } from "../../theme";
import BaseScreen from "../../components/Views/View";
import Button from "../../components/Buttons/Button";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import theme from "../../theme";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackBBNavigation, StackBBTypes } from "../../routes/StackBB.routes";

import { NewTestament, chapterType } from "../../assets/files/ARA";
import Loading from "../OthersScreens/Loading";

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

type RouteProps = RouteProp<StackBBNavigation, "ListChapters">

export default function ListChapters(){
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation<StackBBTypes>()
    const route = useRoute<RouteProps>()
    const book = route.params

    let AllCaps: number[] = []

    useEffect(()=>{
        setLoading(true)
        for(let i=0; i < book.chapters.length; i++){           
            AllCaps.push(i+1)
        }
        setLoading(false)
    },[])

    if(loading == true){
        return(
            <Loading/>
        )
    }
    
    return(
        <BaseScreen>
        <Box width={"100%"} height={56} justifyContent="center" alignItems="center">
            <Text variant="title">{book.name}</Text>
        </Box>
        <Box flex={1} justifyContent="center" alignItems="center">
            <SafeAreaView style={Style.SafeContainer}>
                <FlatList
                data={AllCaps}
                renderItem={({item})=> 
                <Button
                buttonVariant={{
                    variant: "ListSmall"
                }}
                text={<Text variant="strong">{item}</Text>}/>}
                keyExtractor={item=> item.toLocaleString()}
                numColumns={4}
                columnWrapperStyle={{justifyContent: "space-around"}}
                contentContainerStyle={{padding: 10}}/>
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