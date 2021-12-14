import React from 'react';
import {View, ImageBackground, Image, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, } from 'react-native';
import { ListItem, Button, Icon, Header } from 'react-native-elements';
import CoffeeItem from '../component/CoffeeItem';
import styles from './styles_home';
import DATA_MODULE from '../../helpers/moduledata';

const BGSOURCE = '../../assets/background.png'
const LOGOSOURCE = '../../assets/logo.png'

export default function Home(props){

    return(
      <View style={styles.main_container}>
        <ImageBackground style={styles.main_container} source={require(BGSOURCE)}>
          <View>
            <Header
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'HOME', style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
            />
          </View>
          <View style = {styles.cards, {marginTop : 30}}>
            <FlatList
              data={DATA_MODULE}
              renderItem={( {item} ) => (
                <CoffeeItem img={item.img} title={item.title}/>
              )}
              keyExtractor={( item ) => item.title }
            />
          </View>
        </ImageBackground>
      </View>
    )
}
