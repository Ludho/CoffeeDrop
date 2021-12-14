import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const BGSOURCE = '../../assets/background.png'
const LOGOSOURCE = '../../assets/logo.png'

class ForgotPassword extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      email : "",
    }
  }

  _sendEmail(){
    if(this.state.email != ""){
      console.log("email envoyé à " + this.state.email)
      alert("email envoyé à " + this.state.email)
    }
    else{
      console.log("Veuillez renseigner un mail")
      alert("Veuillez renseigner un mail")
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.main_container} source={require(BGSOURCE)}>
          <View style={styles.header_container}>
            <Image style={styles.logo} source={require(LOGOSOURCE)}/>
          </View>
          <View style={styles.content_container}>
            <Text style={styles.text}>Mot de passe oublié ?</Text>
            <TextInput
            style={styles.input_text}
              placeholder="Email"
              textContentType='emailAddress'
              keyboardType='email-address'
              onChangeText = {(text) => { this.setState({email : text}) }}
            />
            <TouchableOpacity style={styles.button} onPress={() => this._sendEmail()}>
              <Text style={styles.button_text}>Envoyer un mail</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
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
    flex:3,
    justifyContent : 'flex-end',
    alignItems : 'center',
  },

  content_container : {
    flex: 4,
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

   text: {
     fontSize:20,
     color:'#fee9d6'
   }
});

export default ForgotPassword
