'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Alert,
  Text,
  View
} from 'react-native';

import AppIntro from 'react-native-app-intro';

export default class dogbuddy extends Component {

  onSkipBtnHandle = (index) => {
    Alert.alert('Skip');
    console.log(index);
  }

  doneBtnHandle = () => {
    Alert.alert('Done');
  }

  render() {
    return (
      <AppIntro
        onSkipBtnClick={this.onSkipBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        pageArray={pageArray}
      />
    );
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('dogbuddy', () => dogbuddy);
