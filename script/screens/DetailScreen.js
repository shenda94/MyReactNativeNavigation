import { View, Text, Button } from 'react-native'
import React from 'react'

const DetailScreen = ({ route, navigation }) => {
  const { itemId, itemText } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>text data: {JSON.stringify(itemText)}</Text>
      
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default DetailScreen