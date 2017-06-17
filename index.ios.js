'use strict'

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import FormModal from './components/FormModal';

import Intro from './pages/Intro';
import Login from './pages/Login';
import Home from './pages/Home';
import Add from './pages/Add';
import Calendar from './pages/Calendar';

export default class dogbuddy extends Component {

  render() {
    let showIntro = false;
    let showAuth = false; // remember switch back again
    let showHome = (showIntro === showAuth);

    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="Intro" component={Intro} initial={ showIntro } />
          <Scene key="Login" component={Login} initial={ showAuth } />
          <Scene key="Home" component={Home} initial={ showHome } duration={0} />
          <Scene key="Add" component={Add} duration={0} />
          <Scene key="Calendar" component={Calendar} duration={0} />
          <Scene key='FormModal' component={FormModal} direction='vertical' rightTitle='Save' hideNavBar={false} />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('dogbuddy', () => dogbuddy);
