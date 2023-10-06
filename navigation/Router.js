import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeTabNavigator from './HomeTabNavigator'
import Home from '../pages/Home'


const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            < Stack.Navigator>
                <Stack.Screen
                    name={'HomeTabNavigator'}
                    component={HomeTabNavigator} 
                    options={{
                    headerShown: false
                }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
