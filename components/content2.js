import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Home2TabNavigator from '../navigation/Home2TabNavigator'


export default function Box() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>We Provide</Text>
      <View style={styles.row}>
        <View style={styles.box}>
        <Fontisto name="blood-test" size={24} color="black" />
          <Text>covid Test</Text>
        </View>
        <View style={styles.box}>
        <FontAwesome5 name="hospital" size={24} color="black" />
          <Text onPress={()=>navigation.navigate('Home2TabNavigator')}>hospital</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
        <MaterialIcons name="coronavirus" size={24} color="black" />
          <Text>cases</Text>
        </View>
        <View style={styles.box}>
        <FontAwesome5 name="lungs" size={24} color="black" />
          <Text>symptoms</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 2,
    width: '100%',
    marginLeft: -5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    // marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Adjust the width to control the space between boxes
    paddingHorizontal: 5, // Adjust the horizontal padding for spacing on the edges
    marginTop: 5,
  },
  box: {
    backgroundColor: 'white',
    padding: 15,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%', // Adjust the width to control the space between boxes
    borderRadius: 5,
    elevation: 5, // Elevation for Android shadow effect
    shadowColor: 'black', // Shadow color for iOS shadow effect
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS shadow effect
    shadowOpacity: 0.25, // Shadow opacity for iOS shadow effect
    shadowRadius: 3, // Shadow radius for iOS shadow effect
  },
});
