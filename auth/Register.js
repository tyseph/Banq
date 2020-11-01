import React, { Component } from 'react';
import { email, Button, View, Text, TextTextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import { TextInput } from 'react-native-gesture-handler';

export default class Login extends Component{
        
        constructor(props) {
                super(props);
                this.state = {
                        email: '',
                        password: '',
                        confirmPassword: ''
                };
              }

        Register = () => {

                let email = this.state.email;
                let password = this.state.password;
                let checkPassword = this.state.checkPassword;

                console.log(email + " " + password + "" + checkPassword);
                
                if (!email || !password) {
                        window.alert('Enter Username and Password');
                }

                else if (password !== checkPassword ) {
                        window.alert('Incorrect Password');
                }

                else { 
                        auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then(() => {
                        console.log('signed in!');
                        // this.props.navigation.navigate('Home');
                        })
                        .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                        window.alert('That email address is already in use!');
                        }

                        if (error.code === 'auth/invalid-email') {
                        window.alert('That email address is invalid!');
                        }

                        console.error(error);
                        });
        }
}
        
        render(){
            return(
                <View>
                <Text>Register</Text>
                <TextInput placeholder="Username" onChangeText={(email) => this.setState({email})} value={this.state.email} />
                <TextInput placeholder="Password" onChangeText={(password) => this.setState({password})} value={this.state.password} />
                <TextInput placeholder="Confirm Password" onChangeText={(checkPassword) => this.setState({checkPassword})} value={this.state.checkPassword} />
                <Button title="Register" onPress={this.Register}/>
                <Button title="Go to login" onPress={()=>{this.props.navigation.navigate('Login')}}/>
          </View>
            )
        }
      }