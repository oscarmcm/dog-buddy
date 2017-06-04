'use strict'

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text>THIS SHOULD BE LOGIN SCREEN!</Text>
        <Text onPress={Actions.Home}>GO TO HOME!</Text>
      </View>
    )
  }
}
