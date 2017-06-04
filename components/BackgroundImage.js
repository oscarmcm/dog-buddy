'use strict'

import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
});

export default class BackgroundImage extends Component {

    render() {
        return (
          <Image source={this.props.path} style={styles.backgroundImage}>
            {this.props.children}
          </Image>
        )
    }
}
