'use strict'

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import Intro from './pages/Intro';
import Login from './pages/Login';
import Home from './pages/Home';
import Add from './pages/Add';
import Setting from './pages/Setting';

export default class dogbuddy extends Component {

  render() {
    let showIntro = true;
    let showAuth = true; // remember switch back again
    let showHome = showIntro && showAuth;
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="Intro" component={Intro} initial={ showIntro } />
          <Scene key="Login" component={Login} initial={ showAuth } />
          <Scene key="Home" component={Home} initial={ showHome } duration={0} />
          <Scene key="Add" component={Add} duration={0} />
          <Scene key="Setting" component={Setting} duration={0} />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('dogbuddy', () => dogbuddy);
