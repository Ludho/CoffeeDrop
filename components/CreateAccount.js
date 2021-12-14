import React from 'react'
import {View, ImageBackground, Image, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'

const BGSOURCE = '../assets/background.png'
const LOGOSOURCE = '../assets/logo.png'

class CreateAccount extends React.Component {

  constructor(props) {
  super(props)
  this.state = {
    username : "",
    password : "",
    email : "",
    confirmPassword : "",
  }
}

_createAccount() {
  if(this.state.username != "" && this.state.password != "" && this.state.email != "" && this.state.confirmPassword != ""){
    if(this.state.password == this.state.confirmPassword){
      console.log("compte créé : " + this.state.username +
      " - " + this.state.email +
      " - " + this.state.password)
      this.props.navigation.navigate("Profile",{
        user : this.state.username,
      })
    }
    else{
      console.log("Les mots de passes ne correspondent pas")
      alert('Les mots de passes ne correspondent pas')
    }
  }
  else{
    console.log("Veuillez remplir tous les champs")
    alert('Veuillez remplir tous les champs')
  }
}

  render(){

    return(
      <View style={styles.main_container}>
        <ImageBackground style={styles.bg_container} source={require(BGSOURCE)}>
          <View style={styles.header_container}>
            <Image style={styles.logo} source={require(LOGOSOURCE)}/>
          </View>
          <View style={styles.content_container}>
            <Text style={{fontSize:20, color:'#fee9d6'}}>Créer un compte</Text>
            <TextInput
              style={styles.input_text}
              placeholder="Nom d'utilisateur"
              textContentType='username'
              onChangeText = {(text) => { this.setState({username : text}) }}
            />

            <TextInput
              style={styles.input_text}
              placeholder="Email"
              textContentType='emailAddress'
              keyboardType='email-address'
              onChangeText = {(text) => { this.setState({email : text}) }}
            />

            <TextInput
              style={styles.input_text}
              placeholder='Mot de passe'
              autoCompleteType='off'
              textContentType='password'
              secureTextEntry={true}
              onChangeText = {(text) => { this.setState({password : text}) }}
            />

            <TextInput
              style={styles.input_text}
              placeholder='Confirmer mot de passe'
              autoCompleteType='off'
              textContentType='password'
              secureTextEntry={true}
              onChangeText = {(text) => { this.setState({confirmPassword : text}) }}
            />

            <TouchableOpacity style={styles.button} onPress = {() =>  this._createAccount() }>
                <Text style={styles.button_text}>Créer un compte</Text>
            </TouchableOpacity>
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

  bg_container: {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center',
    resizeMode: "cover",
    justifyContent: "center"
  },

  header_container: {
    flex:1,
    justifyContent : 'flex-end',
    alignItems : 'center',
  },

  content_container : {
    flex: 2,
    alignItems : 'center',
    width : '100%'
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
    marginTop: 10,
    height: 50,
    width : '75%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingLeft: 10,
    borderRadius: 10,
  },

})

export default CreateAccount
