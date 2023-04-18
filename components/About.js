import React from 'react';
import { View, Text } from 'react-native';
import {styles as ss} from './styles';
 
export default function About() {
  return (
    <View style={ss.container}>
    <Text style={ss.title}>Almaosztály</Text>

    <Text>Author: Balogh Csenge</Text>
    <Text>Date: 2022. 04. 18.</Text>
    <Text>Group: Szoft_II_N</Text>
    <Text><a href='https://github.com/csengekulker/almaosztaly' target='_blank'>GitHub</a></Text>
  </View>
  );
}
 