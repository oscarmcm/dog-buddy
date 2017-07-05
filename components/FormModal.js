'use strict'

import React, {Component} from 'react';

import Container from './Container';

export default class FormModal extends Component {
  render () {
    return (
      <Container withNavBar={true}>
        { this.props.renderScene() }
      </Container>
    )
  }
}
