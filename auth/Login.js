import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';

export default class Login extends Component{
        
        
        render(){
            return(
                <View>
                <Text>Sajal</Text>
                <Button title="Login" onPress={()=> {this.props.navigation.navigate('Home')}}/>
                <Button title="Go to register" onPress={()=>{this.props.navigation.navigate('Register')}}/>
          </View>
            )
        }
      }