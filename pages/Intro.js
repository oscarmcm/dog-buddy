'use strict'

import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';

import AppIntro from 'react-native-app-intro';
import { Actions } from 'react-native-router-flux';

export default class Intro extends Component {

  onSkipBtnHandle = (index) => {
    Alert.alert('Skip');
    console.log(index);
  }

  doneBtnHandle = () => {
    Actions.Login
  }

  render() {
    return (
      <AppIntro
        onSkipBtnClick={this.onSkipBtnHandle}
        onDoneBtnClick={Actions.Login}
        pageArray={pageArray}
      />
    )
  }
}

const pageArray = [
  {
    title : 'Page 1',
    description : 'Description 1',
    backgroundColor : '#fa931d',
    fontColor : '#fff',
    level : 8
  }, {
    title: 'Page 2',
    description: 'Description 2',
    backgroundColor: '#a4b602',
    fontColor: '#fff',
    level: 9
  }, {
    title: 'Page 3',
    description: 'Description 3',
    backgroundColor: '#61acb2',
    fontColor: '#fff',
    level: 10
  }
];
