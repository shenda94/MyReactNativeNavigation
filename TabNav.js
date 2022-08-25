// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Detail from './script/screens/DetailScreen';
import Homes from './script/screens/HomeScreen';
import aboutScreen from './script/screens/AboutScreen';
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
//const HomeStack = createNativeStackNavigator();
//const SettingsStack = createNativeStackNavigator();

function TabNav() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Homes} />
            <Tab.Screen name="Settings" component={aboutScreen} />
        </Tab.Navigator>
    </NavigationContainer>  
  );
}

export default TabNav;