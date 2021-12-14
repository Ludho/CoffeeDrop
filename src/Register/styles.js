import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
   footerView: {
    
    alignItems: "center",
    marginTop: 10,
  },
   footerText: {
    fontSize: 16,
    color: '#2e2e2d'
  },
   footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16
  }
})
