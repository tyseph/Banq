import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import auth from '@react-native-firebase/auth';

export default class Profile extends Component {

  SignOUt = () => {
    auth()
    .signOut()
    .then(() =>{
      window.alert('Signed Out');
    })
  }

  render(){
  return (
    <View>
      <Text>Profile!</Text>
      <Button title="Logout" onPress={ this.SignOUt }/>
    </View>
  );
}
}