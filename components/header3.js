import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
  const navigation = useNavigation()
  return (
    <View style={styles.header}>
      <View style={styles.leftContent}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={()=>navigation.navigate('HomeTabNavigator')} />
      </View>
      <Text style={styles.headerText}>{props.title}</Text>
      <View style={styles.rightContent}>
        <AntDesign name="search1" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
