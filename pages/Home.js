'use strict'

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import BarTabs from '../components/BarTabs';

import Swiper from 'react-native-swiper';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} 
                paginationStyle={styles.pagination} 
                showsButtons={false} 
                loop={false}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        <BarTabs selected={'home'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  wrapper: {
    paddingBottom: 25,  
    paddingTop: 10,
  },
  pagination: {
    height: 20,
    position: 'absolute',
    top: 0,
  },
  slide1: {
    flex: 1,
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default Home;
