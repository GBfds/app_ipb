import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import SignIn from "../screens/NoAuthenticated/SignIn";
import SignUp from "../screens/NoAuthenticated/SignUp";

export type StackSignNavigation ={
    SignIn: undefined;
    SignUp: undefined;
}

export type StackSignTypes = NativeStackNavigationProp<StackSignNavigation>

const Stack = createNativeStackNavigator()

export default function StackSignRoutes(){
    return(
        <Stack.Navigator initialRouteName="SignIn" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
            name="SignIn"
            component={SignIn}/>
            <Stack.Screen
            name="SignUp"
            component={SignUp}/>
        </Stack.Navigator>
    )
}