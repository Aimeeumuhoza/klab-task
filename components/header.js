import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.leftContent}>
        <MaterialCommunityIcons name="shield-plus" size={24} color="blue" />
        <Text style={styles.headerText}>covid 19</Text>
      </View>
      <View style={styles.rightContent}>
        <Ionicons name="search" size={24} color="black" style={styles.icon} />
        <Ionicons name="notifications" size={24} color="black" style={styles.icon} />
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
    justifyContent: 'space-between', // Align children to the ends of the header
    paddingHorizontal: 20,
  },
  leftContent: {
    flexDirection: 'row', // Align shield icon and text horizontally
    alignItems: 'center', // Center items vertically
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10, // Add space between the shield icon and the text
  },
  rightContent: {
    flexDirection: 'row', // Align search and notifications icons horizontally
  },
  icon: {
    marginLeft: 20,
  },
});
