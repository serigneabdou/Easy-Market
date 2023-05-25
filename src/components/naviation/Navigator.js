import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from '../tabNavigator/TabNavigation';

const Stack = createStackNavigator()
const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='tab' component={TabNavigation}  options={{
                headerShown: false,
              }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator