import React, {Fragment} from 'react';
import { StyleSheet, TextInput, Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import Dashboard from './Dashboard';
// import SignUp from './components/SignUp';

class Login extends React.Component {
  static navigationOptions = {
    header : null
  }
  constructor (props) {
    super(props);
    this.state = {
      loggedin : 'logout'
    };
    this.login = this.login.bind(this);
  }

  componentDidMount = async () => {
    const loggedin = await AsyncStorage.getItem('loggedin');
    await this.setState({ loggedin });
  }

  login = async () => {
    await AsyncStorage.setItem('loggedin', 'login`');
    this.setState({
      loggedin : 'login'
    })
  }

  render() {
    const {loggedin} = this.state;
    return (
      <Fragment>
        {
          loggedin === 'login' ? <Dashboard /> : <LoginScreen login={this.login} />
        }
      </Fragment>
    )
  }
}

const LoginScreen = (props) => {
  return (
    <View style={styles.loginContainer} >
      <Text style={styles.loginTitle} >Login</Text>
        <View style={{flex:2}} >
          <TextInput placeholder="Username" />
          <TextInput placeholder="Password" />
          <TouchableOpacity onPress={ () => {
            props.login();
          }} style={styles.loginButton} ><Text
          style={{
            fontSize : 15,
            color : 'white',
            textAlign : 'center'
          }}
        >Login</Text></TouchableOpacity>
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  loginContainer : {
    padding : 10,
    flex : 1
  },
  loginTitle : {
    flex : 1,
    textAlign : 'center',
    width : '100%',
    fontSize : 25,
    marginTop: 10,
  },
  loginButton : {
    width : '100%',
    padding : 8,
    borderRadius : 8,
    backgroundColor : '#999',
  }
})

export default Login;