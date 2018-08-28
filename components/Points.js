import React, { Component } from 'react'
import { View, Text, ScrollView, TextInput, Image, Animated, TouchableWithoutFeedback} from 'react-native';
import styles from '../modules/Styles';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Points extends Component {
  state = {
    rewards : [],
    rewarded : {}
    // modalPosition : new Animated.ValueXY()
  }

  componentDidMount = () => {
    const {rewards} = this.state;
    for (let i = 0; i < 10; i++)
    {
      rewards.push({
        id : i,
        name : `Reward ${i+1}`,
        price : 10 * (1 + i),
        description : `Reward ini adalah reward ke ${i + 1} dengan harga ${10 * (i + 1)} point. Bisa tukar?`
      })
    }
    this.setState({rewards})
  }

  render() {
    const {rewards, rewarded} = this.state;
    return (
      <React.Fragment>
      <ScrollView style={{padding : 15, paddingBottom : 110}} >
        <View style={styles.pointViewContainer}>
          <Text style={{ color : "#cecece", fontSize : 20 }} >Point-mu</Text>
          <Text style={{ fontSize : 35 }} >999+</Text>
          <Icon name="ios-trophy" size={45} color={'#ffa502'} />
        </View>
        <View style={styles.searchBar} >
          <View style={{flex : 2, width : '90%'}}>
            <TextInput style={{width : '100%', padding:10, fontSize : 15}} placeholder="Cari Reward" underlineColorAndroid="white" />
          </View>
          <View style={{width : '10%', position : 'absolute', top : 0, right: 5, bottom : 0, justifyContent : 'center', alignItems : 'center'}} >
            <Icon name="ios-search" size={25} color="lightgrey" />
          </View>          
        </View>
        {/* <View style={styles.rewardContainer} >
          
        </View> */}
        {
          rewards.map((reward, index) => {
            return (
              <Rewards key={index} openModal={() => {
                this.refs.rewardModal.open()
                this.setState({rewarded : reward});
              }} {...reward} />
          )
          })
        }
      </ScrollView>
      <Modal 
      style={[styles.modal, styles.rewardModal]}
      swipeToClose={true}
      ref={"rewardModal"}
      onClosed={() => {
        console.log("Closed")
      }}
      >
        <View style={{ width : '100%', height: 250, overflow : 'hidden' }} >
          <Image source={require('../default.png')} style={{ width : '100%', height : '100%' }} />
        </View>
        <View style={{ padding : 15 }} >
          <Text style={{ fontSize : 25 }} >{rewarded.name}</Text>
          <Text style={{ fontSize : 15, color : 'lightgrey' }}>{rewarded.price} points</Text>
          <Text>
            {rewarded.description}
          </Text>
        </View>
      </Modal>
      </React.Fragment>
    )
  }
}

const Rewards = (props) => {
  return (
    <View style={{ width : '100%', marginTop : 8, overflow : 'hidden', borderRadius : 8 }} >
      <View style={{ width : '100%', height: 150, overflow : 'hidden' }} >
        <Image source={require('../default.png')} style={{ width : '100%', height : '100%' }} />
      </View>
      <TouchableWithoutFeedback onPress={() => {
        props.openModal();
      }} >
        <View style={{ backgroundColor :'white',borderBottomLeftRadius:8, borderBottomRightRadius : 8, padding:15 }} >
          <Text style={{ fontSize : 25 }} >{props.name}</Text>
          <Text style={{ fontSize : 15, color : 'lightgrey' }}>{props.price} points</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}