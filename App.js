import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './components/Home';
import Wallet from './components/Wallet';
import Profile from './components/Profile';

import Login from './auth/Login';
import Register from './auth/Register';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default class App extends Component{

  createHomeTab = () => {
    return(
        <Tab.Navigator>
          <Tab.Screen name="Wallet" component={Wallet} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
  }
  
createAuthStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={this.createHomeTab} />
      </Stack.Navigator>
    );
  }

  render(){
  return (
    <NavigationContainer>
      { this.createAuthStack() }
    </NavigationContainer>
  );
}
}