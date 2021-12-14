import React from 'react'
import {View, ImageBackground, Image, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'


const BGSOURCE = '../assets/background.png'
const LOGOSOURCE = '../assets/logo.png'

class Login extends React.Component {

  constructor(props) {
  super(props)
  this.state = {
    username : "",
    password : ""
  }
}

  _displayInfo(){
    if( this.state.username != "" && this.state.password != "" ){
      console.log("Se connecter - Username : " + this.state.username + " - Password : " + this.state.password)
    }
  }

  _displayCreateAccount() {
      this.props.navigation.navigate("CreateAccount")
  }

  _displayForgotPassword(){
    this.props.navigation.navigate("ForgotPassword")
  }

  _login(){
    if( this.state.username != "" && this.state.password != "" ){
      console.log("Se connecter - Username : " + this.state.username + " - Password : " + this.state.password)
      this.props.navigation.navigate("Profile",{
        user : this.state.username,
      })
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <ImageBackground style={styles.main_container} source={require(BGSOURCE)}>
          <View style={styles.header_container}>
            <Image
              style={styles.logo}
              source = {require(LOGOSOURCE)}
            />
          </View>
          <View style={styles.login_container}>
            <TextInput
              style={styles.input_text}
              placeholder="Nom d'utilisateur"
              textContentType='username'
              onChangeText = {(text) => { this.setState({username : text}) }}
              onSubmitEditing={() => { this.secondTextInput.focus(); }}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.input_text}
              placeholder='Mot de passe'
              textContentType='password'
              secureTextEntry={true}
              ref={(input) => { this.secondTextInput = input; }}
              onChangeText = {(text) => { this.setState({password : text}) }}
              onSubmitEditing={() => {this._login()}}
            />
            <TouchableOpacity
                style={styles.button}
                onPress= { () => this._login()}
              >
              <Text style={styles.button_text}>Se connecter</Text>
            </TouchableOpacity>
            <View style={styles.options_container}>
              <TouchableOpacity  onPress={() => this._displayCreateAccount()}>
                <Text style={styles.text}>créer un compte</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this._displayForgotPassword()}>
                <Text style={styles.text}>mot de passe oublié ?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  main_container: {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center',
    resizeMode: "cover",
    justifyContent: "center"
  },

  header_container: {
    flex:2,
    justifyContent : 'flex-end',
    alignItems : 'center',
  },

  login_container: {
    flex: 3,
    width : '75%'
  },

  options_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent : 'space-between'
  },

  logo: {
    height : 160,
    width : 125,

  },

  button:{
    marginTop:20,
    marginBottom: 10,
    padding:20,
    backgroundColor: '#fee9d6',
    borderRadius: 10,
  },

  button_text: {
    textAlign:'center',
    color: '#dca374'
  },

   input_text: {
    marginTop: 20,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingLeft: 10,
    borderRadius: 10,
  },

   text: {
     fontSize:12,
     color:'#fee9d6'
   }
})

export default Login
