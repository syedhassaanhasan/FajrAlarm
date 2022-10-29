import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import PowerButton from './components/PowerButton'
import AlarmSlider from './components/AlarmSlider'

const App = () => {
  return(
    <View style={styles.container}>
      <PowerButton></PowerButton>
      <AlarmSlider ></AlarmSlider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
})

export default App;