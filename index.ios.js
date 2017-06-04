'use strict'

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Alert, Text, View} from 'react-native';

import {Actions, Scene, Router} from 'react-native-router-flux';

import Intro from './pages/Intro';
import Login from './pages/Login';
import Home from './pages/Home';


export default class dogbuddy extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Intro" component={Intro} hideNavBar={true} />
          <Scene key="Login" component={Login} hideNavBar={true} />
          <Scene key="Home" component={Home} hideNavBar={false}/>
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('dogbuddy', () => dogbuddy);
