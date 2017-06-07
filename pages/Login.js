'use strict'

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Actions } from 'react-native-router-flux';
import Button from 'apsl-react-native-button'
import * as Animatable from 'react-native-animatable';

import BackgroundImage from '../components/BackgroundImage'

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      showSignUp: false
    };
  }

  onSignIn() {
    this.setState({
      showSignIn: !(this.state.showSignIn),
      showSignUp: false,
    })
  }

  onSignUp() {
    this.setState({
      showSignIn: false,
      showSignUp: !(this.state.showSignUp)
    })
  }

  render() {
    return (
      <BackgroundImage path={require('../images/login_bck.jpg')}>
        {this.state.showSignIn ?
          <Animatable.View animation="fadeInUpBig" duration={400} useNativeDriver style={styles.loginForm}>
            <Text>Aqui va el login form</Text>
          </Animatable.View>
        : null}
        {this.state.showSignUp ?
          <Animatable.View animation="fadeInUpBig" duration={400} useNativeDriver style={styles.loginForm}>
            <Text>Aqui va el registro form</Text>
          </Animatable.View>
        : null}
        <View style={styles.container}>
          <Button onPress={this.onSignIn.bind(this)} style={styles.button} textStyle={styles.text}>Sign In</Button>
          <Button onPress={this.onSignUp.bind(this)} style={styles.button} textStyle={styles.text}>Sign Up</Button>
        </View>
      </BackgroundImage>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  loginForm: {
    height: '70%', 
    backgroundColor: '#FAFAFA',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 0,
    width: '49.5%',
    alignSelf: 'flex-end',
    marginBottom: 0,
    height: 45,
  },
  text: {
    color: 'black',
    fontSize: 20
  },
});
