import React, { useState } from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import { styles } from '../App.style';
import{ styles as ss} from './styles'

export default function Apple() {

    function calcPercentage(first, second) {
        let cent = first + second
    
        let firstPercent = 100 * first / cent
        let secondPercent = 100 * second / cent
        
        setFirstPercent(firstPercent)
        setSecondPercent(secondPercent)
    
      }
    
      function submit() {
        let result = calcPercentage(Number(first), Number(second))
        // reveal text element with result
      }
    
      const [first, setFirst] = useState(0)
      const [second, setSecond] = useState(0)
      const [firstPercent, setFirstPercent] = useState(0)
      const [secondPercent, setSecondPercent] = useState(0)

  return (
    <View style={ss.container}>
    <Text style={ss.title}>Almaosztály</Text>

    <View
      style={ss.body}>

      <Text>Első osztály:</Text>
      <TextInput
        clearTextOnFocus
        onChangeText={(first) => setFirst(Number(first))}
        style={ss.input} />

      <Text>Másodosztály:</Text>
      <TextInput
        clearTextOnFocus
        onChangeText={(second) => setSecond(Number(second))}
        style={ss.input} />

      <TouchableHighlight onPress={submit} value='Submit' style={[ss.submit, ss.button]}>
        <Text>Submit</Text>
      </TouchableHighlight>
      <hr style={ss.divider}/>

      <Text style={ss.result}>Megoszlás</Text>

      <Text>Első osztály: {firstPercent}%</Text>
      <Text>Másodosztály: {secondPercent}%</Text>

    </View>
  </View>
  );
}
