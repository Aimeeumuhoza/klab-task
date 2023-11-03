import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

export default function Header() {
  const user = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      <View style={styles.emailContainer}>
        <Text style={styles.emailText}>{user[0].email}</Text>
      </View>
      <View style={styles.headerContent}>
        <View style={styles.leftContent}>
          <MaterialCommunityIcons name="shield-plus" size={24} color="blue" />
          <Text style={styles.headerText}>covid 19</Text>
        </View>
        <View style={styles.rightContent}>
          <Ionicons name="search" size={24} color="black" style={styles.icon} />
          <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  emailContainer: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headerContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginRight: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  emailText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
