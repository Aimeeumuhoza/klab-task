import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";



export default function Header() {
  const user= useSelector((state) => state.user);
  console.log(user.email)
  return (
    <View style={styles.header}>
      <Text style={[ styles.text]}>{user.email}</Text>
      <View style={styles.headerr}>
      <View style={styles.leftContent}>
        <MaterialCommunityIcons name="shield-plus" size={24} color="blue" />
        <Text style={styles.headerText}>covid 19</Text>
      </View>
     
      <View style={styles.rightContent}>
        <Ionicons name="search" size={24} color="black" style={[styles.icon, styles.iconMargin]} />
        <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
      </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: 20,
    backgroundColor: 'white',
    
  },
  headerr: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: 20,
    backgroundColor: 'white',
    
  },
  leftContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  rightContent: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  icon: {
    marginLeft: 20,
  },
  iconMargin: {
    marginRight: 10, 
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 12,
    color:"black"
},
});
