import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeTabNavigator from './HomeTabNavigator'
import Home from '../pages/Home'
import Box from '../components/content2';
import Hospital from '../pages/Hospital'
import Home2TabNavigator from './Home2TabNavigator'

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
                 <Stack.Screen
                    name={'Home2TabNavigator'}
                    component={Home2TabNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="Box" component={Box} />
                <Stack.Screen name="Hospital" component={Hospital} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
