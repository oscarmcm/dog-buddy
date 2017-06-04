'use strict'

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Actions } from 'react-native-router-flux';

import BackgroundImage from '../components/BackgroundImage'

export default class Login extends Component {
  render() {
    return (
      <BackgroundImage path={require('../images/login_bck.jpg')}>
        <View style={styles.container}>
          <Text style={styles.text}>THIS SHOULD BE LOGIN SCREEN!</Text>
          <Text style={styles.text} onPress={Actions.Home}>GO TO HOME!</Text>
        </View>
      </BackgroundImage>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 32
  },
});
