'use strict'

import React, { Component } from 'react';
import {AppRegistry, Text} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import FirebaseHelpers from "./includes/FirebaseHelpers";

import FormModal from './components/FormModal';

import Intro from './pages/Intro';
import Login from './pages/Login';
import Home from './pages/Home';
import Add from './pages/Add';
import Setting from './pages/Setting';
import Calendar from './pages/Calendar';
import AddPet from './pages/AddPet';

export default class dogbuddy extends Component {

  constructor(props) {
    super(props);
    FirebaseHelpers.initialise();
    this.state = {
      showIntro: false,
      showAuth: true,
      showHome: null,
      user: null
    }
  }

  componentWillMount = () => {
    
  }

  render = () => {
    const {showIntro, showAuth, showHome} = this.state;
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="Intro" component={Intro} initial={showIntro} />
          <Scene key="Login" component={Login} initial={showAuth} />
          <Scene key="Home" component={Home} initial={showHome} duration={0} />
          <Scene key="Add" component={Add} duration={0} />
          <Scene key="Calendar" component={Calendar} duration={0} />
          <Scene key="Setting" component={Setting} duration={0} />
          <Scene key="AddPet" component={AddPet} duration={0}
            hideNavBar={false} title='Add Pet'
            titleStyle={{fontWeight:'bold',fontSize:16}}
            navigationBarStyle={{backgroundColor: 'rgb(247, 247, 248)'}} />
          <Scene key='FormModal' component={FormModal} direction='vertical' rightTitle='Save' hideNavBar={false} />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('dogbuddy', () => dogbuddy);
