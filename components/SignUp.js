import React from 'react'
import { TextInput, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import styles from '../modules/Styles';

class SignUp extends React.Component {
  static navigationOptions = {
    header : null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ 
          fontSize : 25, 
          flex : 1, 
          paddingTop : 12, 
          position : 'relative', 
          zIndex : 5,
          color : 'white'
          }} >Sign Up First</Text>
        <View style={styles.inputContainer} >
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Birth Date" />
          <TextInput style={styles.input} placeholder="Gender" />
          <TextInput style={styles.input} placeholder="Mobile Phone Number" />
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Login')
          }} style={styles.btn}>
            <Text style={{
              textAlign : 'center',
              width : '100%',
              color : 'white',
              fontSize : 15
            }} >Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Image style={{
          flex : 1,
          position : 'absolute',
          width : '100%',
          height : '100%',
          zIndex : 0
        }} source={ require('../bg.jpg') } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer : {
    flex : 3,
    width : '100%',
    padding : 15,
    position : 'relative',
    zIndex : 5,
    backgroundColor : 'rgba(255, 255, 255, 0.6)',
  },
  input : {
    // backgroundColor : 'rgba(255, 255, 255, 0.7)',
    color : 'black',
    width : '100%',
    borderRadius : 8,
    marginBottom : 5
  },
  btn : {
    width : '100%',
    borderRadius : 8,
    padding : 10,
    backgroundColor : '#0984e3',
    marginTop : 10
  },
  loginContainer : {
    width : '100%',
    padding : 10
  }
});

export default SignUp;