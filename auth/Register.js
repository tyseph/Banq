import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Register extends Component{
        render(){
  return (
        <View>
        <Text>Register</Text>
        <Button title="Register" onPress={()=> {this.props.navigation.navigate('Login')}}/>
        <Button title="Go to login" onPress={()=>{this.props.navigation.navigate('Login')}}/>
  </View>
  );
}
}
