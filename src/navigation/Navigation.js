import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Parameters from '../Parameters/Parameters'
import CreateAccount from '../Register/CreateAccount'
import ForgotPassword from '../ForgotPassword/ForgotPassword'
import Home from '../Home/Home';

const StackNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  },
  Profile:{
    screen: Profile,
  },
  Parameters:{
    screen: Parameters,
  },
  CreateAccount:{
    screen : CreateAccount,
  },
  ForgotPassword:{
    screen : ForgotPassword,
  }
})

export default createAppContainer(StackNavigator)
