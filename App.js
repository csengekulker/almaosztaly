import { useState } from 'react';
import { TextInput,  Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-web';
import { styles } from './App.style';

export default function App() {
  function submit() {
    console.log('submit');
    // calc percentages
    // reveal text element with result
  }

  function reset() {
    console.log('reset');
    setFirst(''); setSecond('')
  }

  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')

  return (
        <View style={styles.container}>
      <Text style={styles.title}>Almaosztály</Text>

      <View
        style={styles.body}>

        <Text>Első osztály:</Text>
        <TextInput
          onChangeText={(first) => setFirst(first)}
          style={styles.input} />

        <Text>Másodosztály:</Text>
        <TextInput
          onChangeText={(second) => setSecond(second)}
          style={styles.input}/>

          <TouchableHighlight onPress={submit} value='Submit' style={[styles.submit, styles.button]}>
            <Text>Submit</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={reset} value='Again' style={[ styles.reset, styles.button]}>
            <Text>Again</Text>
          </TouchableHighlight>

        <Text>{first}, {second}</Text>
      </View>
    </View>
  );
}
