import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import ListOldsBooks from "../screens/Bible/ListOldsBooks";
import ListNewsBooks from "../screens/Bible/ListNewsBooks";
import ListChapters from "../screens/Bible/ListChapters";
import { bookType } from "../assets/files/ARA";

export type StackBBNavigation ={
    ListOldsBooks: undefined;
    ListNewsBooks: undefined;
    ListChapters: bookType;
}

export type StackBBTypes = NativeStackNavigationProp<StackBBNavigation>

const Stack = createNativeStackNavigator()

export default function StackBBRoutes(){
    return(
        <Stack.Navigator initialRouteName="ListBooks" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
            name="ListOldsBooks"
            component={ListOldsBooks}/>
            <Stack.Screen
            name="ListNewsBooks"
            component={ListNewsBooks}/>
            <Stack.Screen
            name="ListChapters"
            component={ListChapters}/>
        </Stack.Navigator>
    )
}