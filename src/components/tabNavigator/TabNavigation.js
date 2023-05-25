import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../../screens/home/Home';

const Tab = createBottomTabNavigator()
const TabNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
    </Tab.Navigator>
  )
}

export default TabNavigation