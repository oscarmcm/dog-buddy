'use strict'

import { StyleSheet } from 'react-native';

const CommonStyle = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ContainerNavBar: {
    paddingTop: 60,
  },
  TabSelected: {
    borderTopWidth: 2,
    borderTopColor: 'red'
  },
  TabButton: {
    borderRadius: 0,
    borderWidth: 0,
    marginBottom: 0,
    height: '100%',
    borderColor: 'red'
  },
  TabText: {
    fontSize: 15,
    color: 'black'
  }
});

export default CommonStyle;
