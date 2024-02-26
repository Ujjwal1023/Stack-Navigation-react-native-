import { View, Text } from 'react-native';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Fav from '../Screens/Fav';
import Profile from '../Screens/Profile';
import Search from '../Screens/Search';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabNavigation() {

    const tab= createBottomTabNavigator();
  return (
   <tab.Navigator screenOptions={{
    headerShown:false
   }}>
    <tab.Screen name="Home" component={Home}
        options={{
            tabBarLabel:"Home",
            tabBarIcon:({size,color})=>(
                <Ionicons name="home" size={24} color="black"/>
  ),
        }}
    />
 

    <tab.Screen name="Fav" component={Fav} options={{
            tabBarLabel:"Fav",
            tabBarIcon:({size,color})=>(
                <Ionicons name="heart" size={24} color="black" />
  ),
        }}
    />
 


    <tab.Screen name="Profile" component={Profile}
     options={{
        tabBarLabel:"Profile",
        tabBarIcon:({size,color})=>(
         <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
),
    }}
/>



    <tab.Screen name="Search" component={Search}
     options={{
        tabBarLabel:"Search",
        tabBarIcon:({size,color})=>(
            <Ionicons name="search" size={24} color="black" />
),
    }}
/>




   </tab.Navigator>
  )
}