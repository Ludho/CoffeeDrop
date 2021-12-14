import React, { useState } from 'react'
import {View, ImageBackground, Image, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import styles from './styles_login';
import { StackNavigator } from 'react-navigation';
import { firebase } from '../firebase/config';

const BGSOURCE = '../../assets/background.png'
const LOGOSOURCE = '../../assets/logo.png'

export default function Login({navigation}){
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')


      const onLoginPress = () => {
          firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then((response) => {
                  const uid = response.user.uid
                  const usersRef = firebase.firestore().collection('users')
                  usersRef
                      .doc(uid)
                      .get()
                      .then(firestoreDocument => {
                          if (!firestoreDocument.exists) {
                              alert("User does not exist anymore.")
                              return;
                          }
                          const user = firestoreDocument.data()
                          navigation.navigate('Home', {user})
                      })
                      .catch(error => {
                          alert(error)
                      });
              })
              .catch(error => {
                  alert(error)
              })
      }

      const displayCreateAccount = () => {
        navigation.navigate("CreateAccount")
      }

      const displayForgotPassword = () =>{
        navigation.navigate("ForgotPassword")
      }

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
              placeholder="Email"
              textContentType='username'
              onChangeText = {(text) => setEmail (text) }
            />
            <TextInput
              style={styles.input_text}
              placeholder='Mot de passe'
              textContentType='password'
              secureTextEntry={true}
              onChangeText = {(text) => setPassword(text)}
            />

            <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
                <Text style={styles.button_text}>Connexion</Text>
            </TouchableOpacity>

            <View style={styles.options_container}>
              <TouchableOpacity  onPress={() => displayCreateAccount()}>
                <Text style={styles.text}>créer un compte</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => displayForgotPassword()}>
                <Text style={styles.text}>mot de passe oublié ?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
