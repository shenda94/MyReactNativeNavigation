import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { styles } from '../styles'

export default class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>About Screen</Text>
        
      </View>
    )
  }
}
