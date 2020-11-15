import React, { Component } from 'react';
import { Button, View, Text, ImageBackground, Image, TextInput } from 'react-native';

export default class Login extends Component {
        //   constructor(props) {
        //     super(props);
        //     this.state = {
        //       email: '',
        //       password: '',
        //     };
        //   }

        //   SignIn = () => {
        //     let email = this.state.email;
        //     let password = this.state.password;

        //     console.log(email + ' - ' + password + ' - ' + displayName);

        //     if (!email || !password) {
        //       window.alert('Enter Username and Password');
        //     } else {
        //       auth()
        //         .signInWithEmailAndPassword(email, password)
        //         .then(() => {
        //           console.log('signed in!');
        //           // this.props.navigation.navigate('Home');
        //         })
        //         .catch(error => {
        //           if (error.code === 'auth/email-already-in-use') {
        //             console.log('That email address is already in use!');
        //           }

        //           if (error.code === 'auth/invalid-email') {
        //             console.log('That email address is invalid!');
        //           }

        //           console.error(error);
        //         });
        //     }
        //   };

        render() {
                return (
                        <View>
                                <ImageBackground
                                        style={{
                                                width: '100%',
                                                height: '80%',
                                                resizeMode: 'contain'

                                        }}
                                        imageStyle={{
                                                borderBottomLeftRadius: 25,
                                                borderBottomRightRadius: 25,
                                        }}
                                        source={require('../assets/bg.png')}>
                                        <Image
                                                source={require('../assets/logo.png')}
                                                style={{
                                                        width: 40,
                                                        height: 51,
                                                        resizeMode: 'contain',
                                                        justifyContent: 'flex-start',
                                                        padding: 25,
                                                        margin: 10,
                                                }}
                                        />
                                <Text>Login</Text>
                                <TextInput
                                        placeholder="Username"
                                />
                                <TextInput
                                        placeholder="Password"
                                />
                                <Button
                                        title="Login"
                                        onPress={() => {
                                                this.props.navigation.navigate('Home');
                                        }}
                                />
                                <Button
                                        title="Go to register"
                                        onPress={() => {
                                                this.props.navigation.navigate('Register');
                                        }}
                                />
                                </ImageBackground>
                        </View>
                );
        }
}
