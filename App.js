import { useState } from 'react';
import { TextInput, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-web';
import { styles } from './App.style';

export default function App() {
  function calcPercentage(first, second) {
    let cent = first + second

    let firstPercent = 100 * first / cent
    let secondPercent = 100 * second / cent

    console.log(cent)

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
    <View style={styles.container}>
      <Text style={styles.title}>Almaosztály</Text>

      <View
        style={styles.body}>

        <Text>Első osztály:</Text>
        <TextInput
          clearTextOnFocus
          onChangeText={(first) => setFirst(Number(first))}
          style={styles.input} />

        <Text>Másodosztály:</Text>
        <TextInput
          clearTextOnFocus
          onChangeText={(second) => setSecond(Number(second))}
          style={styles.input} />

        <TouchableHighlight onPress={submit} value='Submit' style={[styles.submit, styles.button]}>
          <Text>Submit</Text>
        </TouchableHighlight>

        <Text>Első osztály {firstPercent} %</Text>

        <Text>Másodosztály {secondPercent} %</Text>

      </View>
    </View>
  );
}
