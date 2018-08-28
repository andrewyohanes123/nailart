import React from 'react';
import { SafeAreaView } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import SignUp from './components/SignUp';
import Login from './components/Login'
import TabNavigate from './components/Dashboard'
import Points from './components/Points';

class App extends React.Component {
  static navigationOptions = {
    header : null
  }
  render() {
    return(
      // <StackNavigate style={{
      //   height : 0
      // }} />
      <SafeAreaView style={{flex:1, backgroundColor : '#dfe6e9'}} >
        <TabNavigate />
      </SafeAreaView>      
    )    
  }
}

const StackNavigate = createStackNavigator({
  SignUp : {screen : SignUp},
  Login : {screen : Login},
  Dashboard : TabNavigate
});

export default App;