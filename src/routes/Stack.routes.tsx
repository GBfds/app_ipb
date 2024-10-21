import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import Home from "../screens/Authenticated/Home";

export type StackNavigation ={
    Home: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
            name="Home"
            component={Home}/>
        </Stack.Navigator>
    )
}