'use strict'

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Button from 'apsl-react-native-button'
import * as Animatable from 'react-native-animatable';
import * as Firebase from 'firebase';
import {GiftedForm, GiftedFormManager} from 'react-native-gifted-form'

import FBLoginButton from '../components/FBLoginButton'
import GoogleLoginButton from '../components/GoogleLoginButton'

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
        <View style={styles.container}>
          <Button onPress={this.onSignIn.bind(this)} style={styles.button} textStyle={styles.text}>Sign In</Button>
          <Button onPress={this.onSignUp.bind(this)} style={styles.button} textStyle={styles.text}>Sign Up</Button>
        </View>
        {this.state.showSignIn ?
          <Animatable.View animation="fadeInUpBig" duration={400} useNativeDriver style={styles.loginForm}>
            <Button onPress={this.onSignIn.bind(this)} style={styles.closeButton} textStyle={{color: 'white'}}>X</Button>
            <GiftedForm
              formName='signInForm'
              openModal={(route) => {
                navigator.push(route);
              }}
              clearOnClose={true}
              validators={{
                emailAddress: {
                  title: 'Email address',
                  validate: [{
                      validator: 'isLength',
                      arguments: [6, 255],
                    }, 
                    { validator: 'isEmail', }
                  ]
                },
                password: {
                  title: 'Password',
                  validate: [{
                    validator: 'isLength',
                    arguments: [6, 16],
                    message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
                  }]
                },
              }}
            >
              <Text style={styles.textTitle}>Access</Text>
              <GiftedForm.SeparatorWidget />

              <GiftedForm.TextInputWidget
                name='emailAddress' // mandatory
                title='Email address'
                placeholder='example@nomads.ly'
                keyboardType='email-address'
                clearButtonMode='while-editing'
              />

              <GiftedForm.TextInputWidget
                name='password' // mandatory
                title='Password'
                placeholder='******'
                clearButtonMode='while-editing'
                secureTextEntry={true}
              />

              <GiftedForm.SeparatorWidget />

              <GiftedForm.ErrorsWidget/>

              <GiftedForm.SubmitWidget
                title='Sign In'
                widgetStyles={{
                  submitButton: {
                    backgroundColor: '#1ABC9C',
                  }
                }}
                onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
                  if (isValid === true) {
                    Firebase.auth().signInWithEmailAndPassword(values.emailAddress, values.password)
                    .then( response => {
                      postSubmit();
                      GiftedFormManager.reset('signInForm');
                      Actions.Home();
                    })
                    .catch( error => {
                      postSubmit([error.toString()]);
                    });
                  }
                }
              }
              />

              <GiftedForm.NoticeWidget
                title='By signing up, you agree to the Terms of Service and Privacy Policity.'
              />
              <GiftedForm.HiddenWidget name='tos' value={true} />
              <FBLoginButton/>
            </GiftedForm>
          </Animatable.View>
        : null}
        {this.state.showSignUp ?
          <Animatable.View animation="fadeInUpBig" duration={400} useNativeDriver style={styles.loginForm}>
            <Button onPress={this.onSignUp.bind(this)} style={styles.closeButton} textStyle={{color: 'white'}}>X</Button>
            <GiftedForm
              formName='signUpForm'
              openModal={(route) => {
                navigator.push(route);
              }}
              clearOnClose={true}
              validators={{
                emailAddress: {
                  title: 'Email address',
                  validate: [{
                      validator: 'isLength',
                      arguments: [6, 255],
                    }, 
                    { validator: 'isEmail', }
                  ]
                },
                password: {
                  title: 'Password',
                  validate: [{
                    validator: 'isLength',
                    arguments: [6, 16],
                    message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
                  }]
                },
              }}
            >
              <Text style={styles.textTitle}>Register</Text>
              <GiftedForm.SeparatorWidget />

              <GiftedForm.TextInputWidget
                name='emailAddress' // mandatory
                title='Email address'
                placeholder='example@nomads.ly'
                keyboardType='email-address'
                clearButtonMode='while-editing'
              />

              <GiftedForm.TextInputWidget
                name='password' // mandatory
                title='Password'
                placeholder='******'
                clearButtonMode='while-editing'
                secureTextEntry={true}
              />

              <GiftedForm.SeparatorWidget />

              <GiftedForm.ErrorsWidget/>

              <GiftedForm.SubmitWidget
                title='Sign up'
                widgetStyles={{
                  submitButton: {
                    backgroundColor: '#1ABC9C',
                  }
                }}
                onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
                  if (isValid === true) {
                    Firebase.auth().createUserWithEmailAndPassword(values.emailAddress, values.password)
                    .then( response => {
                      postSubmit();
                      GiftedFormManager.reset('signUpForm');
                      Actions.Home();
                    })
                    .catch( error => {
                      postSubmit([error.toString()]);
                    });
                  }
                }
              }
              />

              <GiftedForm.NoticeWidget
                title='By signing up, you agree to the Terms of Service and Privacy Policity.'
              />
              <GiftedForm.HiddenWidget name='tos' value={true} />
              <FBLoginButton />
              <GoogleLoginButton />
            </GiftedForm>
          </Animatable.View>
        : null}
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
  closeButton: {
    backgroundColor: '#3b4045',
    borderColor: '#3b4045',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    position: 'absolute',
    top: -25,
    right: 15,
    zIndex: 10,
  },
  text: {
    color: 'black',
    fontSize: 20
  },
  textTitle: {
    color: 'black',
    fontSize: 25,
    padding: 10
  }
});
