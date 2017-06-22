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

class BackgroundImage extends Component {

  render() {
    return (
      <Image source={this.props.path} style={this.props.styles || styles.backgroundImage}>
        {this.props.children}
      </Image>
    )
  }

}

export default BackgroundImage;
