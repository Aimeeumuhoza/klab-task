import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header3 from '../components/header3';

export default function Hospital() {
  return (
    <View style={styles.Container}>
       <Header3 title="Hospital" />
        <View style={styles.contentContainer}>
      <View style={styles.itemContainer}>
        <Image
          source={require('../assets/hsp.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.infoText}>Information 1</Text>
          <Text> ghvguvfyfufyuuuyyfy</Text>
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Image
          source={require('../assets/hsp.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.infoText}>Information 2</Text>
          {/* Add more text components for additional details */}
        </View>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 20,
        backgroundColor:'white'
    },
  contentContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
    width:'100%',
    
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:18
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
