
import React, {Component} from 'react';

import Container from './Container';

export default class FormModal extends Component {
  render () {
    return (
      <Container style={{paddingTop: 60}}>
        { this.props.renderScene() }
      </Container>
    )
  }
}
