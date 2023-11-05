import * as React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "./screens/HomeScreen"
import DetailScreen from "./screens/DetailScreen"
import SettingScreen from "./screens/SettingScreen"
import EditProfile from "./screens/EditProfile"

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} s />
                <Tab.Screen name="Detail" component={DetailScreen}/>
                <Tab.Screen name="Setting" component={SettingScreen} />
                <Tab.Screen name="Profile" component={EditProfile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}