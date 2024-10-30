import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import HomeProfile from "../screens/Authenticated/Profile/HomeProfile";
import InfoUser from "../screens/Authenticated/Profile/InfoUser";

export type StackProfileNavigation ={
    HomeProfile: undefined;
    InfoUser: undefined;
}

export type StackProfileTypes = NativeStackNavigationProp<StackProfileNavigation>

const Stack = createNativeStackNavigator()

export default function StackProfile(){
    return(
        <Stack.Navigator initialRouteName="HomeProfile" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
            name="HomeProfile"
            component={HomeProfile}/>
            <Stack.Screen
            name="InfoUser"
            component={InfoUser}/>
        </Stack.Navigator>
    )
}