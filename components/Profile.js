import React from 'react';
import {ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BGSOURCE = '../assets/background.png'
const LOGOSOURCE = '../assets/logo.png'

class Profile extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      user : this.props.navigation.state.params.user
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        <ImageBackground style={styles.main_container} source={require(BGSOURCE)}>
          <View style = {styles.header_container}>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <Text style={styles.username_text}>{this.state.user}</Text>
          </View>
          <View style={styles.content_container}>
            <View style={styles.preference_container}>
              <Text style={styles.text}>Café préféré du moment</Text>
              <View style={styles.preference_cafe_container}>
                <Image
                  style={styles.tinyLogo}
                  source={require(LOGOSOURCE)}
                />
                <Image
                  style={styles.tinyLogo}
                  source={require(LOGOSOURCE)}
                />
                <Image
                  style={styles.tinyLogo}
                  source={require(LOGOSOURCE)}
                />
              </View>
            </View>
            <View style={styles.info_container}>
              <Text style={styles.text}>Inscrit depuis le 00/00/0000</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },

  header_container: {
    flex : 1,
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
    margin : 10,
    borderColor : '#000',
    borderWidth : 2,
    borderRadius : 20,
    backgroundColor : '#fee9d6'
  },

  preference_cafe_container:{
    flex : 1,
    margin:20,
    padding : 10,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
    borderColor: '#000',
    borderWidth : 1,
    borderRadius : 10,
    backgroundColor : 'grey'
  },
  info_container:{
    flex : 2,
    justifyContent : 'center',
    //backgroundColor : 'yellow'
  },
  tinyLogo:{
    width: 75,
    height: 100,
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
