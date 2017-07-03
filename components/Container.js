'use strict'

import React, { Component } from 'React';
import { View } from 'react-native';

import CommonStyle from '../styles/common';

export default class Container extends Component {
  render() {
    return (
      <View style={
          [
            CommonStyle.Container,
            (this.props.withNavBar ? CommonStyle.ContainerNavBar : null),
            this.props.style
          ]
        }>
        {this.props.children}
      </View>
    );
  }
}
