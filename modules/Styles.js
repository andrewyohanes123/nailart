import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
    backgroundColor : '#007AFF',
    marginTop : 10
  },
  loginContainer : {
    width : '100%',
    padding : 10
  },
  profileHeader : {
    padding : 10,
    marginBottom : 8,
    flex : 1,
    backgroundColor : '#f1f2f6',
    flexDirection: 'row',
  },
  profileAction : {
    flex : 4,
    backgroundColor : 'white',
    marginTop : 2
  },
  profilePhoto : {
    width : 100,
    height : 100,
    borderColor: "#cecece",
    borderWidth: 3,
  },
  profileUsername : {
    fontSize: 25,
  },
  profileOptions : {
    backgroundColor: 'white',
    width : '100%',
    padding : 8,
    margin : 5
  },
  orderMenuContainer : {
    width : '100%',
    padding : 15,
    position: 'relative',
    backgroundColor : 'white',
    borderRadius : 8,
    marginTop : 5
  },
  orderMenuTextLeft : {
    flex : 3,
    maxWidth : '65%'
  },
  orderMenuTextRight : {
    position : 'absolute',
    backgroundColor : 'rgb(255, 149, 0)',
    padding: 5,
    borderRadius : 5,
    width : '30%',
    right : 5,
    bottom : 5,
    top : 5,
    flex : 1,
    justifyContent : 'center',
    alignItems: 'center',
  },
  pointViewContainer : {
    borderRadius : 8,
    padding : 8,
    flex : 1,
    justifyContent : 'center',
    alignItems: 'center',
    width : '100%',
    backgroundColor : 'white'
  },
  rewardContainer : {
    flex : 1
  },
  searchBar : {
    marginBottom: 5,
    marginTop : 5,
    width : '100%',
    backgroundColor : 'white',
    borderRadius : 8,
    position : 'relative'
  }
});