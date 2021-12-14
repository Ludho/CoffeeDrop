import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Profile from '../components/Profile'
import Login from '../components/Login'
import Parameters from '../components/Parameters'
import CreateAccount from '../components/CreateAccount'
import ForgotPassword from '../components/ForgotPassword'

const SearchStackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title : 'Login'
    }
  },

  Profile:{
    screen: Profile,
    navigationOptions: {
      title : 'Profile'
    }
  },
  Parameters:{
    screen: Parameters,
    navigationOptions: {
      title : 'Parametres'
    }
  },
  CreateAccount:{
    screen : CreateAccount,
    navigationOptions : {
      title : 'Créer un compte'
    }
  },
  ForgotPassword:{
    screen : ForgotPassword,
    navigationOptions : {
      title : "Mot de passe oublié ?"
    }
  }
})

export default createAppContainer(SearchStackNavigator)
