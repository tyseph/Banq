import React, { Component } from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './components/Home';
import Wallet from './components/Wallet';
import Profile from './components/Profile';

import Login from './auth/Login';
import Register from './auth/Register';

import auth from '@react-native-firebase/auth';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default class App extends Component{


  constructor() {
    super();
    this.state = {
      loading: true,
      authenticated: false
    }
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loading: false, authenticated: true });
      } else {
        this.setState({ loading: false, authenticated: false });
      }
    });
  }


  createHomeTab = () => {
    return(
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Wallet" component={Wallet} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
  }
  
createAuthStack = () => {
    return(
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register} />
        {/* <Stack.Screen name="Home" component={this.createHomeTab} /> */}
      </Stack.Navigator>
    );
  }

  render(){
  if (this.state.loading){
    return(
      <Text>Loading...</Text>
    );
  }

  else if (!this.state.authenticated) {
    return(
      <NavigationContainer>
        { this.createAuthStack() }
      </NavigationContainer>
    );
  }

  else {
    return (
      <NavigationContainer>
        { this.createHomeTab() }
      </NavigationContainer>
    );
  }
}

}