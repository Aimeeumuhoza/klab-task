import React from 'react'
import { useRoute } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'

const Details = () => {
  const route=useRoute();
  return (
    <View>
    <Text style={{fontSize:26}}>name:{route.params.name} </Text>
    <Text style={{fontSize:21}}>Email:{route.params.email} </Text>
   
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
      width: "100%",
      paddingHorizontal: 20,
      
  },
  inputContainer: {
      width: '100%',
      marginBottom: 20,
  }
  });