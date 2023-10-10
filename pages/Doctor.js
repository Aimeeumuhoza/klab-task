import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header3 from '../components/header3';
import { AntDesign } from '@expo/vector-icons';

export default function Doctor() {

  return (
    <View style={styles.container}>
      <Header3 title="Doctor" />
      <View style={styles.contentContainer}>
        <View style={styles.itemContainer}>
          <Image
            source={require('../assets/doctor.jpg')}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>Dr. Anile</Text>
            <Text style={styles.specialty}>Psychology</Text>
            <View style={styles.reviewContainer}>
              <AntDesign name="star" size={24} color="yellow" />
              <Text style={styles.reviewText}>Review</Text>
            </View>
          </View>
        </View>

        <View style={styles.itemContainer}>
          <Image
            source={require('../assets/doctor.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>Dr. Anile</Text>
            <Text style={styles.specialty}>Neuro Specialist</Text>
            <View style={styles.reviewContainer}>
              <AntDesign name="star" size={24} color="yellow" />
              <Text style={styles.reviewText}>Review</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  contentContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
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
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  specialty: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewText: {
    marginLeft: 4,
  },
});
