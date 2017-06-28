'use strict'

import React, { Component } from 'React';
import * as Firebase from 'firebase';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import {Actions} from 'react-native-router-flux';

export default class FBLoginButton extends Component {
  render() {
    return (
      <FBLogin style={{alignSelf: 'center'}}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        permissions={['email']}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={ data => {
          const credential = Firebase.auth.FacebookAuthProvider.credential(data.credentials.token);
          Firebase.auth().signInWithCredential(credential)
            .then( response => { 
                Actions.Home();
              })
            .catch( error => { 
              console.log(error);
            });
        }}
      />
    )
  }
}