import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

class CoffeeItem extends React.Component {

  constructor(props){
    super(props)
    this.title = this.props.title;
    this.img = this.props.img;
  }

  _displayDetailModule(){
    //this.props.navigation.navigate("Profile");
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._displayDetailModule()}>
          <View style={styles.card_template}>
            <Image
            style={styles.card_image}
            source={{uri: this.img}}
            />
            <View style={styles.text_container}>
              <Text style={styles.card_title}>{this.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection : 'row',
    justifyContent: "center",
    margin : 10
  },
  card_template:{
    flex: 1,
    width: WIDTH * 0.8,
    height: HEIGHT * 0.2,
    //SHADOWS
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13
    //END SHADOWS
  },

  card_image: {
    width: WIDTH * 0.8,
    height: HEIGHT * 0.2,
    borderRadius : 10
  },
  text_container:{
    position: "absolute",
    width: WIDTH * 0.8,
    height: 30,
    bottom:0,
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius : 10,
    borderBottomRightRadius: 10
  },
  card_title: {
     color: "white",
  }
});

export default CoffeeItem
