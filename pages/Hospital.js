import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header3 from '../components/header3';
import { EvilIcons, AntDesign } from '@expo/vector-icons';

export default function Hospital() {
  return (
    <View style={styles.container}>
      <Header3 title="Hospital" />
      <View style={styles.contentContainer}>
        <View style={styles.itemContainer}>
          <Image
            source={require('../assets/hsp.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.infoText}>Information 2</Text>
            <View style={styles.locationContainer}>
              <EvilIcons name="location" size={24} color="black" />
              <Text style={styles.locationText}>Rwanda, NY</Text>
            </View>
            <View style={styles.ratingContainer}>
              <AntDesign name="star" size={24} color="yellow" />
              <Text style={styles.ratingText}>5.0 | </Text>
              <Text style={styles.openText}>Open 24 hours</Text>
            </View>
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
            <View style={styles.locationContainer}>
              <EvilIcons name="location" size={24} color="black" />
              <Text style={styles.locationText}>Rwanda, NY</Text>
            </View>
            <View style={styles.ratingContainer}>
              <AntDesign name="star" size={24} color="yellow" />
              <Text style={styles.ratingText}>5.0 | </Text>
              <Text style={styles.openText}>Open 24 hours</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  contentContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 0,
    marginRight: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  locationText: {
    fontSize: 16,
    marginLeft: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
  },
  openText: {
    fontSize: 16,
    color: 'blue',
    marginLeft: 5,
  },
});
