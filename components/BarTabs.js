'use strict'

import React, {Component} from 'react';
import {View} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Tabs from 'react-native-tabs';
import Button from 'apsl-react-native-button'

import CommonStyle from '../styles/common';
import Container from './Container';


export default class BarTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'home'
    };
  }

  render() {
    return (
        <Tabs
          selected={this.props.selected}
          style={{backgroundColor: 'white'}}
          selectedIconStyle={CommonStyle.TabSelected}
          onSelect={el=>this.setState({page:el.props.name})}>
          <Button name="home" onPress={Actions.Home} style={CommonStyle.TabButton} textStyle={CommonStyle.TabText}>Home</Button>
          <Button name="report" onPress={Actions.Report} style={CommonStyle.TabButton} textStyle={CommonStyle.TabText}>Reports</Button>
          <Button name="add" onPress={Actions.Add} style={CommonStyle.TabButton} textStyle={CommonStyle.TabText}>Add</Button>
          <Button name="cal" onPress={Actions.Calendar} style={CommonStyle.TabButton} textStyle={CommonStyle.TabText}>Calendar</Button>
          <Button name="config" onPress={Actions.Setting} style={CommonStyle.TabButton} textStyle={CommonStyle.TabText}>Config</Button>
        </Tabs>
    );
  }
}
