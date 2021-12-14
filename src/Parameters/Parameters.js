import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Parameters extends React.Component {



  render() {
    return (
      <View style={styles.main_container}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.text}>En cours de développement</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center'
  },

  logo: {
    width: 100,
    height: 100,
  },
  text: {
    textAlign : 'center'
  }
});

export default Parameters
