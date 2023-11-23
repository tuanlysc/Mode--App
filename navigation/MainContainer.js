import * as React from "react"

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from "./screens/HomeScreen"
import DetailScreen from "./screens/DetailScreen"
import SettingScreen from "./screens/SettingScreen"
import EditProfile from "./screens/EditProfile"

const Tab = createBottomTabNavigator();

const MainContainer = () => {
    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarStyle:{
                    position:'absolute',
                    bottom:25,
                    left:20,
                    right:20,
                    elevation:0,
                    backgroundColor:'#ffffff',
                    borderRadius:15,
                    height:90,
                    ...style.shadow
                }
            }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon:({focused}) => (
                    <View>
                        <Ionicons name="home" size={24} color={focused ? '#FF7465' : '#D8D8D8'} />
                    </View>
                )
            }}/>
            <Tab.Screen name="Detail" component={DetailScreen} options={{
                tabBarIcon:({focused}) => (
                    <View>
                        <Ionicons name="cart" size={24} color={focused ? '#FF7465' : '#D8D8D8'} />
                    </View>
                )
            }}/>
            <Tab.Screen name="Setting" component={SettingScreen} options={{
                tabBarIcon:({focused}) => (
                    <View>
                        <Ionicons name="settings" size={24} color={focused ? '#FF7465' : '#D8D8D8'} />
                    </View>
                )
            }}/>
            <Tab.Screen name="EditProfile" component={EditProfile} options={{
                tabBarIcon:({focused}) => (
                    <View>
                        <Ionicons name="person" size={24} color={focused ? '#FF7465' : '#D8D8D8'} />
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
}

const style = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
});

export default MainContainer;