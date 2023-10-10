import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Boxes() {
  return (
    <View style={styles.container}>
      <View style={styles.outerBox}>
        <Text style={{color:'red'}}>Emergency</Text>
        <Text style={styles.boxTitle}>Do you have</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button ,{ backgroundColor: 'white' }]}>
            <Text style={[styles.buttonText, {color:'blue'}]}>Find</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: '55%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'E9EAFF'
  },
  outerBox: {
    backgroundColor: '',
    padding: 20,
    borderRadius: 0,
    width: '100%',
    alignItems: 'left',
    elevation: 1,
    backgroundColor:''
  },
  boxTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 38,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
