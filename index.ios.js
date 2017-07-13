/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS, 
  Button,
  TextInput,
  UIManager
} from 'react-native';

import TouchID from 'react-native-touch-id'
import Gap from './src/components/Gap'

export default class testingTouchID extends Component {

  _pressHandler = () => {
    TouchID.authenticate('to demo this react-native component')
      .then(success => AlertIOS.alert('Authenticated Successfully') )
      .catch(error => {
        AlertIOS.alert('Authentication failed') 
        console.warn(error)
      })
  }

  _checkIfSupported = () => {
    TouchID.isSupported()
      .then( supported => {
        AlertIOS.alert('Supported : ' + supported)
      })
      .catch( error => {
        AlertIOS.alert('Not Supported')
        console.warn(error)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>

        <Gap></Gap>

        <TouchableHighlight onPress={this._checkIfSupported}>
          <Text>
            Check if device supports TouchID
          </Text>
        </TouchableHighlight>

        <Gap></Gap>

        <TouchableHighlight onPress={this._pressHandler}>
          <Text>
            Authenticate with Touch ID
          </Text>
        </TouchableHighlight>

        <Gap></Gap>

        <TextInput style={styles.textInput}></TextInput>

        <Gap></Gap>

        <Button 
          onPress={this._pressHandler}
          title='Auth!'
          accessibilityLabel = 'Hey you!'
          ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput : {
    
  }
});

AppRegistry.registerComponent('testingTouchID', () => testingTouchID);
