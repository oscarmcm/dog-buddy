'use strict'

import React, { Component } from 'React';
import * as Firebase from 'firebase';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import {StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

import FirebaseHelpers from "../includes/FirebaseHelpers";

export default class GoogleLoginButton extends Component {

  componentDidMount() {
    this.setupGoogleSignin();
  }

  firebaseGoogleLogin = (token) => {
    const credential = Firebase.auth.GoogleAuthProvider.credential(token);
    FirebaseHelpers.logIn('google', {'credential': credential}).then( (user) => {
      Actions.Home();
    })
    .catch(function (err) {
      console.log(err);
    });
  }

  render() {
    return (
      <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={this.signIn.bind(this)}/>
    )
  }

  async setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        iosClientId: '197049431754-n2k0h22hlo1opvaabi3fiqub9akoidd6.apps.googleusercontent.com',
        offlineAccess: false
      });
      // Auto login
      // const user = await GoogleSignin.currentUserAsync();
      // console.log(user);
      // this.firebaseGoogleLogin(user.idToken);
    }
    catch(err) {
      console.log("Google signin error", err.code, err.message);
    }
  }

  signIn() {
    GoogleSignin.signIn()
    .then((user) => {
      this.firebaseGoogleLogin(user.idToken)
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }
}

const styles = StyleSheet.create({
  googleButton: {
    width: 200, 
    height: 48, 
    alignSelf: 'center',
    marginTop: 10
  }
});