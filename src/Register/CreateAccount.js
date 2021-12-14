import React, { useState } from 'react'
import {View, ImageBackground, Image, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import styles from './styles';
import { firebase } from '../firebase/config';

const BGSOURCE = '../../assets/background.png'
const LOGOSOURCE = '../../assets/logo.png'

export default function CreateAccount({navigation}){
      const [fullName, setFullName] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [confirmPassword, setConfirmPassword] = useState('')

      const onFooterLinkPress = () => {
          navigation.navigate('Login')
      }

      const onRegisterPress = () => {
          if (password !== confirmPassword) {
              alert("Passwords don't match.")
              return
          }
          firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then((response) => {
                  const uid = response.user.uid
                  const data = {
                      id: uid,
                      email,
                      fullName,
                  };
                  const usersRef = firebase.firestore().collection('users')
                  usersRef
                      .doc(uid)
                      .set(data)
                      .then(() => {
                          navigation.navigate('Home', {user: data})
                      })
                      .catch((error) => {
                          alert(error)
                      });
              })
              .catch((error) => {
                  alert(error)
          });

        }
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
              onChangeText = {(text) => setFullName(text)}
            />

            <TextInput
              style={styles.input_text}
              placeholder="Email"
              textContentType='emailAddress'
              keyboardType='email-address'
              onChangeText = {(text) =>  setEmail(text)}
            />

            <TextInput
              style={styles.input_text}
              placeholder='Mot de passe'
              autoCompleteType='off'
              textContentType='password'
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />

            <TextInput
              style={styles.input_text}
              placeholder='Confirmer mot de passe'
              autoCompleteType='off'
              textContentType='password'
              secureTextEntry={true}
              onChangeText={(text) => setConfirmPassword(text)}
            />

            <TouchableOpacity style={styles.button} onPress={() => onRegisterPress()}>
                <Text style={styles.button_text}>Créer un compte</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerView}>
              <Text style={styles.footerText}>Vous avez déjà un compte ? <Text onPress={() => onFooterLinkPress()} style={styles.footerLink}>Log in</Text></Text>
          </View>
        </ImageBackground>
      </View>
    )

}
