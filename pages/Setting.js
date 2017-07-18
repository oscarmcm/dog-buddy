'use strict'

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Alert} from 'react-native';

import {Actions} from 'react-native-router-flux';
import SettingsList from 'react-native-settings-list';

import BarTabs from '../components/BarTabs';
import FirebaseHelpers from "../includes/FirebaseHelpers";

export default class Setting extends Component {

  state = {
    userName: '',
    switchValue: false,
    loggedIn: false
  }

  toggleAuthView = () => {
    this.setState({
      toggleAuthView: !this.state.toggleAuthView,
      userName: 'Oscar Cortez'
    });
   }

  onValueChange = (value) => {
    this.setState({switchValue: value});
  }

  render = () => {
    let bgColor = '#DCE3F4';
    return (
      <View style={{backgroundColor:'#EFEFF4',flex:1}}>
        <View style={{borderBottomWidth:1, backgroundColor:'#f7f7f8',borderColor:'#c8c7cc'}}>
          <Text style={{alignSelf:'center',marginTop:30,marginBottom:10,fontWeight:'bold',fontSize:16}}>Settings</Text>
        </View>
        <View style={{backgroundColor:'#EFEFF4',flex:1}}>
          <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
            <SettingsList.Header headerStyle={{marginTop:15}}/>
            {this.state.toggleAuthView ?
              <SettingsList.Item
               title={`Logged In As ${this.state.userName}`}
               hasNavArrow={false} />
              :
              <SettingsList.Item
               isAuth={true}
               authPropsUser={{placeholder:'E-mail'}}
               authPropsPW={{placeholder:'Password'}}
               onPress={() => this.toggleAuthView()}
              />
            }
            <SettingsList.Header headerStyle={{marginTop:15}}/>
            <SettingsList.Item
              title='Add Pets'
              onPress={Actions.AddPet}
            />
            <SettingsList.Item
              title='Add Veterinary'
              onPress={() => Alert.alert('Route to Blutooth Page')}
            />
            <SettingsList.Header headerStyle={{marginTop:5}}/>
            <SettingsList.Item
              title='Log Out'
              titleStyle={{color:'red', textAlign:'center'}}
              onPress={() => FirebaseHelpers.logOut() }
            />
          </SettingsList>
        </View>
        <BarTabs selected={'config'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle:{
    marginLeft:15,
    alignSelf:'center',
    height:30,
    width:30
  },
  titleInfoStyle:{
    fontSize:16,
    color: '#8e8e93'
  }
});
