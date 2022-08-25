import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContext } from '@react-navigation/native';
import Todoitem from './Todoitem'

export default function HomeScreen() {

  const someData = [
    {text: "buy a coffea", key:"1"},
    {text: "making a app", key:"2"},
    {text: "playing in the beach", key:"3"},
  ];
  
  // We can access navigation object via context
  const navigation = React.useContext(NavigationContext);

  //navigation.toggleDrawer();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <FlatList
              data={someData} renderItem = { ({item}) => {
return (
<TouchableOpacity onPress= { () => navigation.navigate("Detail",{
itemText: item.text,
itemID: item.key
}
)}>


<Text>{item.text}</Text>
</TouchableOpacity>

);

}} />


      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Detail', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  )
}