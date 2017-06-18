'use strict'

import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Tabs from 'react-native-tabs';
import Button from 'apsl-react-native-button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectedTab: {
    borderTopWidth: 2,
    borderTopColor: 'red'
  },
  tabButton: {
    borderRadius: 0,
    borderWidth: 0,
    marginBottom: 0,
    height: '100%',
    borderColor: 'red',
  }
});

class BarTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'home'
    };
  }

  switchScene(key) {
    switch (key) {
      case 'home':
        Alert.alert(key)
        Actions.Home;
      case 'add':
        Actions.Add;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Tabs
          selected={this.props.selected}
          style={{backgroundColor: 'white'}}
          selectedIconStyle={styles.selectedTab}
          onSelect={el=>this.setState({page:el.props.name})}>
          <Button name="home" onPress={Actions.Home} style={styles.tabButton}>Home</Button>
          <Text name="report" onPress={Actions.Report}>Reports</Text>
          <Button name="add" onPress={Actions.Add} style={styles.tabButton}>Add</Button>
          <Text name="foo" selectedStyle={{color: 'green'}}>Time</Text>
          <Button name="config" onPress={Actions.Setting}>Config</Button>
        </Tabs>
      </View>
    );
  }
}

export default BarTabs;
