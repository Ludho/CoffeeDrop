import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
