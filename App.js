import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import homescreen from './screens/homescreen';
import beginnerlevel from './screens/beginnerlevel';
import intermediatelevel from './screens/intermediatelevel';
import expertlevel from './screens/expertlevel';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Appcontainer />
      </View>
    )
  }
}

var switchContainer = createSwitchNavigator({
  HomeScreen : homescreen,
  BeginnerLevel : beginnerlevel,
  IntermediateLevel : intermediatelevel,
  ExpertLevel : expertlevel

})
const Appcontainer = createAppContainer(switchContainer)