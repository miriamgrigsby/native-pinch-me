import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeComponents from "./HomeComponents"
import RobotActions from "./RobotActions"
import Home from './Home.js'
import Instructions from './Instructions'
 
const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Robot Actions" component={RobotActions} />
        <Stack.Screen name="Pinch Me Controller" component={HomeComponents} />
        <Stack.Screen name="Instructions" component={Instructions} />
      </Stack.Navigator>
    </NavigationContainer>
       
    );
  }
}





