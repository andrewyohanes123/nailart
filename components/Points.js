import React, { Component } from 'react'
import { View, Text, ScrollView, TextInput, Image, Animated, TouchableWithoutFeedback} from 'react-native';
import styles from '../modules/Styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Points extends Component {
  state = {
    rewards : [],
    // modalPosition : new Animated.ValueXY()
  }

  componentDidMount = () => {
    const {rewards} = this.state;
    for (let i = 0; i < 10; i++)
    {
      rewards.push({
        id : i,
        name : `Reward ${i+1}`,
        price : 10 * (1 + i)
      })
    }
    this.setState({rewards})
  }

  render() {
    const {rewards} = this.state;
    return (
      <React.Fragment>
        <ModalDialog />
      <ScrollView style={{padding : 15}} >
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
            return (<Rewards key={index} {...reward} />)
          })
        }
      </ScrollView>
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
      <View style={{ backgroundColor :'white',borderBottomLeftRadius:8, borderBottomRightRadius : 8, padding:15 }} >
        <Text style={{ fontSize : 25 }} >{props.name}</Text>
        <Text style={{ fontSize : 15, color : 'lightgrey' }}>{props.price} points</Text>
      </View>
    </View>
  )
}

class ModalDialog extends React.Component {
  state = {
    modalOpaque : new Animated.Value(0),
    modalPosition : new Animated.Value(100)
  }
  componentDidMount() {
    const {modalOpaque, modalPosition} = this.state;
    Animated.parallel([
      Animated.timing(modalOpaque, {
        toValue : 1,
        duration : 100
      }),
      Animated.timing(modalPosition, {
        toValue : 0,
        duration : 500
      })
    ]).start()
  }
  closeModal = () => {
    const {modalOpaque, modalPosition} = this.state;
    Animated.parallel([
      Animated.timing(modalOpaque, {
        toValue : 0,
        duration : 100
      }),
      Animated.timing(modalPosition, {
        toValue : -100,
        duration : 500
      })
    ]).start()
  }
  render() {
    return (
    <Animated.View style={{zIndex : 500 , opacity: this.state.modalOpaque, backgroundColor: 'rgba(0, 0, 0, 0.5)', flex : 1, justifyContent:'center', alignItems:'center' , position: 'absolute', top : 0, left : 0, right: 0,bottom : 0, width : '100%', height : '100%', padding : 20}} >
        <Animated.View style={{
          width : '100%',
          backgroundColor : 'white', 
          padding : 15, 
          borderRadius : 8,
          transform : [{
            translateY : this.state.modalPosition
          }]
          }}>
          <Text>Modal</Text>
          <TouchableWithoutFeedback style={{width : '100%', padding : 5}} onPress={() => {
            this.closeModal()
          }}>
          <View><Text>Press</Text></View>
          </TouchableWithoutFeedback>
        </Animated.View>
    </Animated.View>
    )
  }
}