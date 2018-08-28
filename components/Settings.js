import React, { Component } from 'react'
import {TextInput, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from '../modules/Styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Settings extends Component {
  static navigationOptions = {
    header : null
  }
  constructor(props) {
    super(props);
    this.state = {
      settings : [{
        name : "Nomor Telepon",
        icon : "ios-call"
      },
      {
        name : "Alamat Email",
        icon : "ios-mail"
      },
      {
        name : "Password",
        icon : "ios-lock"
      },
      {
        name : "Notifikasi",
        icon : "ios-notifications"
      }
    ]
    }
  }
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor : "#f1f2f6"
      }} >
        <View style={styles.profileHeader}>
          <View style={{
            flex : 1,
            justifyContent : 'center',
            alignItems : 'center'
          }}>
            <View style={{borderRadius : 100, overflow: 'hidden'}} >
            <Image source={require('../default.png')} style={styles.profilePhoto} />
            </View>            
          </View>
          <View style={{
            flex : 2,
            justifyContent : 'center'
          }} >
            <Text style={styles.profileUsername} >Username</Text>
            <Text style={{color : '#a4b0be'}}>usermail@email.com</Text>
          </View>
        </View>
        <View style={styles.profileAction} >
          {
            this.state.settings.map((setting, index) =>{
              return (
                <TouchableHighlight underlayColor="lightgrey" style={styles.profileOptions} key={index} >
                  <Text size={20} >
                    <Icon name={setting.icon} size={20}  />
                    { ` ${setting.name}` }
                  </Text>
                </TouchableHighlight>
              )
            })
          }
        </View>
      </View>
    )
  }
}
