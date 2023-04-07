/*
* File: App.js
* Author: Balogh Csenge
* Copyright: 2021, Balogh Csenge
* Group: Szoft_II_N
* Date: 2023-04-07
* Github: https://github.com/csengekulker/
* Licenc: GNU GPL
*/
 

import { useState } from 'react';
import {  View } from 'react-native';
import { Button } from 'react-native-web';
import { styles } from './App.style';
import { Apple, About } from './components'

export default function App() {
  const [selectedTab, setSelectedTab] = useState();
 
  let setTab = (tab) => {
    setSelectedTab(tab);
  }
  let selectTab = () => {
     switch(selectedTab) {
      case 'A':
        return <Apple />
      case 'B':
        return <About />
      default:
        return
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.buttonBox}>
          <Button onPress={() => setTab('A')} title='A' />
          <Button onPress={() => setTab('B')} title='B' 
            color='blue'
          />
          </View>
          <View style={styles.component}>
            {selectTab()}
          </View> 
        
    </View>
  );
}

