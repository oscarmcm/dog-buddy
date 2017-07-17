'use strict'

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab';
import * as Animatable from 'react-native-animatable';

import BarTabs from '../components/BarTabs';
import Container from '../components/Container';
import AddWeight from '../components/AddWeight';
import AddAppointment from '../components/AddAppointment';

export default class Add extends Component {

  state = {
    selectedIndex: 0,
  }

  renderForm = (index) => {
    switch (index) {
      case 0:
        return (<AddWeight />)
      case 1:
        return (<Text>He!</Text>)
      case 2:
        return (<AddAppointment />)
      default:
        return (<AddWeight />)
    }
  }

  handleIndexChange = (index) => {
    this.setState({selectedIndex: index,});
  }

  render = () => {
    return (
      <Container style={styles.container}>
        <Animatable.View animation="fadeInUpBig" duration={400} useNativeDriver style={{flex:1}}>
          <SegmentedControlTab
            values={['Weight', 'Diary', 'Appointment']}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
            />
          {this.renderForm(this.state.selectedIndex)}
        </Animatable.View>
        <BarTabs selected={'add'} />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#EAEAEA'
  },
});
