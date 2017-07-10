'use strict'

import React, {Component} from 'react';

import {Actions} from 'react-native-router-flux';
import {GiftedForm, GiftedFormManager} from 'react-native-gifted-form';

import Container from './Container';

import realm from '../realm';

export default class AddAppointment extends Component {

  render = () => {
    return (
      <Container style={{paddingTop: 10}}>
        <GiftedForm
          formName='addAppointmentForm'
          openModal={(route) => {
            Actions.FormModal({
              title: route.getTitle(),
              renderScene: route.renderScene,
              onRight: route.onClose.bind(null, null, Actions)
              /* https://github.com/FaridSafi/react-native-gifted-form/issues/37 */
            })
          }} >
          <GiftedForm.TextInputWidget
            name='title'
            title='Title'
            placeholder='Appointment tile'
            clearButtonMode='while-editing' />
          <GiftedForm.ModalWidget title='Appointment Date' displayValue='date'>
            <GiftedForm.SeparatorWidget />
            <GiftedForm.DatePickerIOSWidget name='date' scrollEnabled={false} />
          </GiftedForm.ModalWidget>
          <GiftedForm.TextAreaWidget
            name='description'
            autoFocus={true}
            placeholder='Something interesting about it' />
          <GiftedForm.SubmitWidget title='Save'
            onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
              if (isValid === true) {
                realm.write(() => { realm.create('Appointment', values);});
                postSubmit();
                GiftedFormManager.reset('addAppointmentForm');
                return Actions.popTo('Home')
              }
            }}
          />
        </GiftedForm>
      </Container>
    )
  }
}
