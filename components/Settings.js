import React from 'react';
import {ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BGSOURCE = '../assets/background.png'

class Profile extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <Text>Settings Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center',
  },

  header_container: {
    flex : 2,
    paddingTop:20,
    justifyContent : 'center',
    alignItems : 'center',
    //backgroundColor : 'red'
  },
  content_container: {
    flex : 4,
    //backgroundColor : 'blue'
  },
  preference_container:{
    flex : 1,
    //backgroundColor : 'grey'

  },

  preference_cafe_container:{
    flex : 1,
    margin:10,
    padding : 10,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
    //backgroundColor : 'blue'
  },
  info_container:{
    flex : 2,
    justifyContent : 'center',
    //backgroundColor : 'yellow'
  },
  tinyLogo:{
    width: 75,
    height: 75,
  },
  logo: {
    width: 100,
    height: 100,
  },
  username_text: {
    fontSize : 30
  },
  text:{
    textAlign : 'center',
    fontSize : 20
  }

});

export default Profile
