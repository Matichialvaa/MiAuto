import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from "./pages/Home";
import {Login} from "./pages/Login"
import {Register} from "./pages/Register"
import {HomeScreen} from "./pages/HomeScreen";
import {UnlockedScreen} from "./pages/UnlockedScreen";
export default function App() {
    const Stack = createNativeStackNavigator(); //used to configure the screens

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Homescreen">
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="UnlockedScreen" component={UnlockedScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}


