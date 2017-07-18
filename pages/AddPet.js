'use strict'

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {GiftedForm, GiftedFormManager} from 'react-native-gifted-form';

import BarTabs from '../components/BarTabs';
import Container from '../components/Container';
import realm from '../realm';

export default class AddPet extends Component {

  render = () => {
    return (
      <Container withNavBar={true}>
        <GiftedForm
          formName='addPetForm'
          openModal={(route) => {
            Actions.FormModal({
              title: route.getTitle(),
              renderScene: route.renderScene,
              onRight: route.onClose.bind(null, null, Actions)
            })
          }} >
          <GiftedForm.TextInputWidget
            name='name'
            title='Name'
            placeholder='Your pet name'
            clearButtonMode='while-editing' />
          <GiftedForm.TextInputWidget
            name='breed'
            title='Breed'
            placeholder='Your pet breed'
            clearButtonMode='while-editing' />
          <GiftedForm.TextInputWidget
            name='color'
            title='Color'
            placeholder='Your pet color'
            clearButtonMode='while-editing' />

          <GiftedForm.SeparatorWidget />

          <GiftedForm.TextInputWidget
            name='chip_code'
            title='Chip Code'
            placeholder='Chip Code'
            clearButtonMode='while-editing' />

          <GiftedForm.SeparatorWidget />

          <GiftedForm.ModalWidget title='Born Date' displayValue='born_date'>
            <GiftedForm.SeparatorWidget />
            <GiftedForm.DatePickerIOSWidget mode='date' name='born_date' scrollEnabled={false} />
          </GiftedForm.ModalWidget>

          <GiftedForm.ModalWidget title='Acquired Date' displayValue='acquired_date'>
            <GiftedForm.SeparatorWidget />
            <GiftedForm.DatePickerIOSWidget mode='date' name='acquired_date' scrollEnabled={false} />
          </GiftedForm.ModalWidget>

          <GiftedForm.SeparatorWidget />

          <GiftedForm.TextInputWidget
            name='weight'
            title='Weight'
            placeholder='Weight'
            clearButtonMode='while-editing' />
          <GiftedForm.ModalWidget title='Sex' displayValue='sex'>
            <GiftedForm.SeparatorWidget />
            <GiftedForm.SelectWidget name='sex' title='Sex' multiple={false}>
              <GiftedForm.OptionWidget title='Female' value='F'/>
              <GiftedForm.OptionWidget title='Male' value='M'/>
            </GiftedForm.SelectWidget>
          </GiftedForm.ModalWidget>

          <GiftedForm.SubmitWidget title='Save'
            onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
              if (isValid === true) {
                values.weight = parseFloat(values.weight);
                values.sex[0] === 'M' ? values.sex = true : values.sex = false;
                realm.write(() => { realm.create('Pet', values);});
                postSubmit();
                GiftedFormManager.reset('addPetForm');
                return Actions.popTo('Home')
              }
            }}
          />
        </GiftedForm>
        <BarTabs selected={'config'} />
      </Container>
    )
  }
}
