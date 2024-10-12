import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text style={styles.text}>REACT NATIVE</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  text:{
    fontSize:50,
  }
})