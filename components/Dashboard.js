import React, { Component, Fragment } from 'react'
import { ScrollView,TextInput, Text, View, Picker, TouchableOpacity, TouchableHighlight } from 'react-native';
import {createBottomTabNavigator, createMaterialTopTabNavigator, SafeAreaView} from 'react-navigation';
import Settings from './Settings';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../modules/Styles';
import Points from './Points';

class Dashboard extends Component {
  static navigationOptions = {
    header : null
  }
  render() {
    return (
      <ScrollView style={{
        padding: 10,
        flex : 1,
        backgroundColor : '#dfe6e9',
        padding : 15
      }} >
        <View style={{flex: 1, marginBottom: 5, backgroundColor:'white', borderRadius : 8, padding: 15}} >
          <Text>Booking Something</Text>
          <Picker>
            <Picker.Item label="Biasa" value="biasa" />
            <Picker.Item label="Luar Biasa" value="luar_biasa" />
          </Picker>
          <View style={{flex : 1, padding:8, justifyContent: 'center', alignItems : 'center', backgroundColor : "grey", borderRadius : 8}} >
            <Text style={{ fontSize : 20, color : 'lightgrey' }} >Rp. 2.500.000</Text>
          </View>
          <View style={{flex: 2, padding: 10, justifyContent: 'center', alignItems : 'center'}} >
            <TextInput style={{ 
              
            }} underlineColorAndroid="white" multiline={true} numberOfLines={10} placeholder="Keterangan Pembayaran"
            style={{
              width: '100%',
            }} />
          </View>
        </View>
        <TouchableOpacity style={styles.btn} >
          <Text style={{textAlign : 'center', fontSize : 18, color: 'white'}} >Pesan</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

class Orders extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}} >
        <TopBarNavigator />
      </View>
    )
  }  
}
class Completed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed_orders : [
        {
          id : 1,
          name : "Biasa",
          price : 10000,
          description : "Bayar pas COD"
        },
        {
          id : 2,
          name : "Biasa",
          price : 20000,
          description : "Bayar pas COD"
        },
        {
          id : 3,
          name : "Luar Biasa",
          price : 30000,
          description : "Bayar pas COD"
        },
        {
          id : 4,
          name : "Luar Biasa",
          price : 40000,
          description : "Bayar pas COD"
        },
        {
          id : 5,
          name : "Luar Biasa",
          price : 50000,
          description : "Bayar pas COD"
        }
      ],
      modal : false,
      modal_data : {}
    }; 
  }

  render() {
    const {completed_orders, modal_data} = this.state;
    return (
      <Fragment>
        { completed_orders.length > 0 ?
        <ScrollView style={{ backgroundColor : '#dfe6e9', padding:8 }} >
        {
          completed_orders.map((order, index) => {
            return (<TouchableHighlight underlayColor="lightgrey" key={index} style={styles.orderMenuContainer}
            onPress={() => {
              this.setState({modal_data : order}, () => {
                this.refs.detailModal.open()
              });
            }}
            >
            <Fragment>
              <View style={styles.orderMenuTextLeft}>
                <Text >{order.name}</Text>
              </View>              
              <View style={styles.orderMenuTextRight}>
                <Text style={{color:'white'}}>Rp. {order.price}</Text>
              </View>
            </Fragment>
            </TouchableHighlight>)
          })
        }
        </ScrollView> :
        <View style={{
          flex : 1,
          justifyContent : 'center',
          alignItems : 'center'
        }} >
          <Text style={{fontSize:20}} >Completed</Text>
        </View>}
        <Modal
          ref={"detailModal"}
          swipeToClose={true}
          onClosed={() => {
            console.log('T E R T U T U P . . .');
          }}
          style={styles.rewardModal}
        >
        <View style={{ padding : 10, flex : 1}} >
          <Text style={{ margin : 15 }} >{modal_data.name}</Text>
          <View style={{ backgroundColor : 'grey', borderRadius : 8, flex : 1, justifyContent : "center", alignItems : "center" }} >
            <Text style={{ fontSize : 20, color: 'lightgrey' }} >{`Rp. ${modal_data.price},-`}</Text>
          </View>
          <View style={{ flex : 4, marginTop : 8 }} >
          <View style={{ flex :1, height : '100%', backgroundColor:'#f1f2f6', width : '100%', borderRadius : 8, padding : 8, }}>
            <Text>{modal_data.description}</Text>
          </View>
          </View>
        </View>
        </Modal>
      </Fragment>
    )
  }
}

const OnProgress = () => {
  return (
    <View style={{
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'
    }} >
      <Text style={{fontSize:20}} >On Progress</Text>
    </View>
  )
}

const TopBarNavigator = createMaterialTopTabNavigator({
  Completed : {
    screen : Completed,
    navigationOptions : {
      tabBarLabel : "Selesai"
    }
  },
  OnProgress : {
    screen : OnProgress,
    navigationOptions : {
      tabBarLabel : "Dalam Proses"
    }
  }
}, {
  tabBarOptions : {
    activeTintColor : "rgb(0, 122, 255)",
    inactiveTintColor : "rgb(90,200,250)",
    style : {
      backgroundColor : "white",
      borderRadius : 8,
      marginLeft : 8,
      marginRight : 8,
      marginTop : 5
    },
    indicatorStyle : {
      height: 0
    }
  }
})

export default createBottomTabNavigator({
  Dashboard : {
    screen : Dashboard,
    navigationOptions : {
      header : null,
      tabBarLabel : 'Pesan',
      tabBarIcon : ({tintColor}) => (
        <Icon name="ios-keypad" color={tintColor} size={24} />
      )
    }
  },
  Points : {
    screen : Points,
    navigationOptions : {
      tabBarLabel : "Point",
      tabBarIcon : ({tintColor}) => (
        <Icon name="ios-trophy" color={tintColor} size={24} />
      )
    }
  },
  Orders : {
    screen : Orders,
    navigationOptions : {
      tabBarLabel : "Orderan",
      tabBarIcon : ({tintColor}) => (
        <Icon name="ios-list-box" color={tintColor} size={24} />
      )
    }
  },
  Settings : {
    screen : Settings, 
    navigationOptions : {
      header : null,
      tabBarLabel : 'Akun',
      tabBarIcon : ({tintColor}) => (
        <Icon name="ios-contact" color={tintColor} size={24} />
      )
    }
  }
});