import { createBox, createText } from "@shopify/restyle";
import React from "react";
import { ThemeProps } from "../../theme";
import BaseScreen from "../../components/Views/View";
import Button from "../../components/Buttons/Button";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { NewTestament} from "../../assets/files/ARA";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { StackBBTypes } from "../../routes/StackBB.routes";

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function ListNewsBooks(){
    const navigation = useNavigation<StackBBTypes>()
    
    return(
        <BaseScreen>
        <Box width={"100%"} height={60} bg="gray" justifyContent="center" alignItems="center">
                <Button
                buttonVariant={{
                    variant: "largeWithIcon"
                }}
                buttonProps={{
                    onPress: ()=> navigation.navigate("ListOldsBooks")
                }}
                text={<Text variant="strong" marginRight="x">Velho Testamento</Text>}
                icon={{
                    icon: "arrowleft",
                    iconColor: theme.colors.green_800,
                    sizeIcon: 24
                }}/>
            </Box>
        <Box flex={1} justifyContent="center" alignItems="center">
            <SafeAreaView style={Style.SafeContainer}> 
                <FlatList
                data={NewTestament}
                renderItem={({item})=> 
                    <Button
                    buttonVariant={{
                        variant: "ListLarge"
                    }}
                    buttonProps={{
                        onPress: ()=> navigation.navigate("ListChapters", item)
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
       // textAlign: ""
    },
    FlatList:{
        padding: 12,
        width: "100%",
    }
})