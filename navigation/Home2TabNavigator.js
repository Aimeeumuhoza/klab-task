// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Doctor from '../pages/Doctor';
// import Hospital from '../pages/Hospital';

// const Navigator = createMaterialTopTabNavigator({
//   Doctor: {
//     screen: Doctor,
//     navigationOptions: {
//       tabBarLabel: 'Doctor',
//     },
//     options: {
//       lazy: false,
//     },
//   },
//   Hospital: {
//     screen: Hospital,
//     navigationOptions: {
//       tabBarLabel: 'Hospital',
//     },
//     options: {
//       lazy: false,
//     },
//   },
// });

// export default Navigator;

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Doctor from "../pages/Doctor"
import Hospital from '../pages/Hospital';

const Tab = createMaterialTopTabNavigator()

const Home2TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="doctor"
                component={Doctor}
                // options={{
                //     tabBarIcon: ({ color }) => (
                //         <FontAwesome name="home" size={32} color="red" />
                //     ),
                // }}

            />
            <Tab.Screen
                name="Hospital"
                component={Hospital}
                // options={{
                //     tabBarIcon: ({ color }) => (
                //         <Ionicons  name="person" size={28} color={color}/>
                //     ),
                // }}
            />
        </Tab.Navigator>
       
    )
}

export default Home2TabNavigator
