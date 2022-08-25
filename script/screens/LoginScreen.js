import React, { Component } from 'react'
import { Text, View,TouchableHighlight } from 'react-native'
import { styles } from '../styles'

export default class LoginScreen extends Component<{}> {
    about = () => {
        const { navigate } = this.props.navigation
        navigate('about');
        }
        login = () => {
        const { navigate } = this.props.navigation;
        // some login code here...
        navigate('user', { user: { name: 'Sam Smith',
        email: 'sam.smith@example.com' } })
        }


  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.titleText} >Login Screen</Text>
        <TouchableHighlight style={styles.primaryButton}
        onPress={this.about}>
        <Text style={styles.primaryButtonText}>About</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.altButton, { marginTop: 20 } ]}
        onPress={this.login}>
        <Text style={styles.altButtonText}>Login</Text>
        </TouchableHighlight>
        </View>
    )
  }
}
