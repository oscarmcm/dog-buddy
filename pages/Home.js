'use strict'

import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Tabs from 'react-native-tabs';

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = {page:'second'};
  }

  render() {
    return (
      <View style={styles.container}>
        <Tabs
          selected={this.state.page}
          style={{backgroundColor:'white'}}
          selectedStyle={{color:'red'}}
          onSelect={el=>this.setState({page:el.props.name})}>
            <Text name="home">Home</Text>
            <Text name="report" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Reports</Text>
            <Text name="add">Add</Text>
            <Text name="fourth" selectedStyle={{color:'green'}}>Time</Text>
            <Text name="config">Config</Text>
        </Tabs>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.instructions}>Selected page: {this.state.page}</Text>
      </View>
    );
  }
}

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
