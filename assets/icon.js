import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const FacebookOption = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <FontAwesome5 name="facebook" size={24} color="black" />
    {/* <MaterialCommunityIcons name="facebook" size={24} color="blue" style={{ marginRight: 10 }} /> */}
    <Text>Facebook</Text>
  </View>
);

const InstagramOption = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <MaterialCommunityIcons name="instagram" size={24} color="purple" style={{ marginRight: 10 }} />
    <Text>Instagram</Text>
  </View>
);

export { FacebookOption, InstagramOption };
