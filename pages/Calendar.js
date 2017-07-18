'use strict';

import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Agenda} from 'react-native-calendars';

import BarTabs from '../components/BarTabs';

import realm from '../realm';

export default class Calendar extends Component {

  state = {
    items: {}
  }

  componentDidMount = () => {
    let items = {};
    let appointments = realm.objects('Appointment');
    appointments.forEach((item) => {
      let date = this.timeToString(item.date);
      if (items[date]) {
        items[date].push({title: item.title, text: item.description})
      } else {
        return items[date] = [{title: item.title, text: item.description}]
      }
    })
    this.setState({items: items});
  }

  render = () => {
    const currentDay = new Date().toISOString().substring(0, 10);
    return (
      <View style={{flex:1}}>
        <Agenda
          items={this.state.items}
          selected={currentDay}
          renderItem={this.renderItem}
          renderEmptyDate={this.renderEmptyDate}
          rowHasChanged={this.rowHasChanged}
        />
        <BarTabs selected={'cal'}/>
      </View>
    );
  }

  renderItem = (item) => {
    return (
      <View style={[styles.item]}><Text>{item.title} - {item.text}</Text></View>
    );
  }

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  }

  timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 5
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
