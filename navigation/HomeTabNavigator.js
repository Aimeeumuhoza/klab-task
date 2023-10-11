import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "../pages/Home"
import { FontAwesome, AntDesign, Ionicons, Feather,MaterialIcons } from '@expo/vector-icons';
import Login from '../pages/Login';
import SignUp from "../pages/Register"

const Tab = createBottomTabNavigator()

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={32} color={color} />
                        
                    ),
                    headerShown:false
                }}

                title="Home"
            />
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons  name="person" size={28} color={color}/>
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name="Register"
                component={SignUp}
                options={{
                    tabBarIcon:({color})=>(
                        <MaterialIcons name="wifi-calling" size={24} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTabNavigator
