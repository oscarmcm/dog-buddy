'use strict'

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import BarTabs from '../components/BarTabs';

import Swiper from 'react-native-swiper';

class Add extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HOLA!</Text>
        <BarTabs selected={'add'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
});

export default Add;
