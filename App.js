import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/Home/Home'
import Login from './src/Login/Login'
import Register from './src/Register/CreateAccount'

const Stack = createStackNavigator();
export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    )
  }
}
