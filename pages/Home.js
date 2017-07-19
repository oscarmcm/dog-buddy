'use strict'

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Swiper from 'react-native-swiper';

import BarTabs from '../components/BarTabs';
import Container from '../components/Container';

import realm from '../realm';

export default class Home extends Component {

  state = {
    pets: []
  }

  componentDidMount = () => {
    let pets = realm.objects('Pet');
    let petsView = []
    pets.forEach((pet) => {
      return petsView.push(
        <View style={styles.slide1} key={pet.name.toLowerCase()}>
          <Text style={styles.text}>{pet.name}</Text>
        </View>
      )
    })
    this.setState({pets: petsView})
  }

  render = () => {
    let user = this.props.user;
    return (
      <Container style={styles.container}>
        <Swiper style={styles.wrapper}
          paginationStyle={styles.pagination}
          showsButtons={false}
          loop={false}>
          <View style={styles.slide1}>
            <Text style={styles.welcome}>Welcome {(user.name) ? user.name : "no user"}</Text>
          </View>
          {this.state.pets}
        </Swiper>
        <BarTabs selected={'home'} />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
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
  },
  welcome: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
