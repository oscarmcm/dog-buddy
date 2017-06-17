'use strict'

import React, {Component} from 'react';

import {Actions} from 'react-native-router-flux';
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form';

import Container from './Container';


export default class AddWeight extends Component {
  render() {
    return (
      <Container style={{paddingTop: 10}}>
        <GiftedForm
          formName='addWeightForm'
          openModal={(route) => {
            Actions.FormModal({
              title: route.getTitle(),
              renderScene: route.renderScene,
              onRight: route.onClose.bind(null, null, Actions)
              /* https://github.com/FaridSafi/react-native-gifted-form/issues/37 */
            })
          }} >
          <GiftedForm.TextInputWidget
            name='weight'
            title='Weight'
            placeholder='Weight in LB'
            clearButtonMode='while-editing' />

          <GiftedForm.ModalWidget title='Mascot' displayValue='mascot'>
            <GiftedForm.SeparatorWidget />
            <GiftedForm.SelectWidget name='mascot' title='Mascot' multiple={false}>
              <GiftedForm.OptionWidget title='Rocky' value='Rocky' />
              <GiftedForm.OptionWidget title='Max' value='Max' />
              <GiftedForm.OptionWidget title='Sussy' value='Sussy' />
            </GiftedForm.SelectWidget>
          </GiftedForm.ModalWidget>

          <GiftedForm.ModalWidget title='Date' displayValue='date'>
            <GiftedForm.SeparatorWidget />
            <GiftedForm.DatePickerIOSWidget name='date' scrollEnabled={false} />
          </GiftedForm.ModalWidget>

          <GiftedForm.SeparatorWidget />
          <GiftedForm.TextAreaWidget
            name='note'
            autoFocus={true}
            placeholder='Something interesting about it' />
          <GiftedForm.SubmitWidget title='Save' />
        </GiftedForm>
      </Container>
    );
  }
};
