import React from 'react';
import { StyleSheet, View, Button, Text, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class NavBar extends React.Component {

constructor(props){
  super(props)
  this.state = {
    isLoading : false
  }
}

  _displayProfile() {
  //console.log("Display film with id" + idFilm)
  this.props.navigation.navigate("Profile")
}

_displayParameters() {
  this.props.navigation.navigate("Parameters")
}

_displayLoading() {
  if (this.state.isLoading) {
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator size='large'  color="#0088C5"/>
      </View>
    )
  }
}

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.nav}>
          <Button style = {styles.button} title = "home" type = "clear" onPress = { () => {} } />
          <Button style = {styles.button} title = "profile" type = "clear" onPress = { () => this._displayProfile()} />
          <Button style = {styles.button} title = "parametres" type = "clear" onPress = { () => this._displayParameters() } />
          <Button style = {styles.button} title = "chat" type = "clear" onPress = { () => {} } />
        </View>
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },

  button: {
    color : "grey"
  },

  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

  nav: {
    flex : 1,
    backgroundColor: "grey",
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection : 'row'
  }
});

export default NavBar
