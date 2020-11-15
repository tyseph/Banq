import React, {Component} from 'react';
import {email, Button, View, Text, TextTextInput} from 'react-native';
import auth from '@react-native-firebase/auth';
import {TextInput} from 'react-native-gesture-handler';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  SignIn = () => {
    let email = this.state.email;
    let password = this.state.password;

    console.log(email + ' - ' + password + ' - ' + displayName);

    if (!email || !password) {
      window.alert('Enter Username and Password');
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('signed in!');
          // this.props.navigation.navigate('Home');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    }
  };

  render() {
    return (
      <View>
        <Text>Login</Text>
        <TextInput
          placeholder="Username"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          placeholder="Password"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.SignIn} />
        <Button
          title="Go to register"
          onPress={() => {
            this.props.navigation.navigate('Register');
          }}
        />
      </View>
    );
  }
}
