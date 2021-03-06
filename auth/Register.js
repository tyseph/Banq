import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Button, CardItem, Body} from 'native-base';

export default class Login extends Component {
           constructor(props) {
                   super(props);
                   this.state = {
                           displayName: '',
                           email: '',
                           password: '',
                           confirmPassword: ''
                   };
                 }

  //         Register = () => {

  //                 let displayName = this.state.displayName;
  //                 let email = this.state.email;
  //                 let password = this.state.password;
  //                 let checkPassword = this.state.checkPassword;

  //                 console.log(displayName+ " " + email + " " + password + "" + checkPassword);

  //                 if (!email || !password) {
  //                         window.alert('Enter Username and Password');
  //                 }

  //                 else if (password !== checkPassword ) {
  //                         window.alert('Incorrect Password');
  //                 }

  //                 else {
  //                         auth()
  //                         .createUserWithEmailAndPassword(email, password)
  //                         .then(() => {
  //                         console.log('signed in!');
  //                         // this.props.navigation.navigate('Home');
  //                         })
  //                         .catch(error => {
  //                         if (error.code === 'auth/email-already-in-use') {
  //                         window.alert('That email address is already in use!');
  //                         }

  //                         if (error.code === 'auth/invalid-email') {
  //                         window.alert('That email address is invalid!');
  //                         }

  //                         console.error(error);
  //                         });
  //         }
  // }

  render() {
    return (
      <>
        <ImageBackground
          style={{
            width: '100%',
            height: '72%'
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

          <CardItem style={styles.logocard}>
            <Image
              source={require('../assets/logo.png')}
              style={{
                width: 83,
                height: 108,
                resizeMode: 'contain',
                margin: 10,
              }}
            />
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Body style={styles.userBody}>
              <View style={styles.viewStyle}>
                <TextInput style={styles.textInputStyle} placeholder="Name" />
              </View>

              <View style={styles.viewStyle}>
                <TextInput style={styles.textInputStyle} placeholder="Email" />
              </View>

              <View style={styles.viewStyle}>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="Password"
                />
              </View>

              <View style={styles.viewStyle}>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="Confirm Password"
                />
              </View>

              <Button full onPress={this.register} style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Register</Text>
              </Button>
            </Body>
          </CardItem>
          <Text style={styles.linkTextStyle}>
            Already have an account? <Text
              style={styles.linkStyle}
              onPress={() => this.props.navigation.navigate('Login')}>
              Login Here
            </Text>
          </Text>
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    fontSize: 20,
    fontFamily: 'Oxygen-Regular',
    fontWeight: '600',
    marginLeft: -10,
    paddingBottom: 3,
  },
  viewStyle: {
    borderBottomWidth: 1,
    width: '100%',
    borderBottomColor: 'gray',
    marginBottom: 25,
  },
  cardItem: {
    borderRadius: 25,
    marginTop: 20,
    alignSelf: 'center',
    width: '90%',
  },
  logocard: {
    borderRadius: 500,
    width: 200,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  userBody: {
    padding: 25,
  },
  buttonStyle: {
    borderRadius: 25,

    backgroundColor: '#096348',
  },
  buttonTextStyle: {
    fontSize: 30,
    fontFamily: 'Oxygen-Bold',
    fontWeight: 'bold',
    color: 'white',
  },
  linkTextStyle: {
    alignSelf: 'center',
    marginTop: 10,
    fontFamily: 'Oxygen-Light',
  },
  linkStyle: {
    color: 'blue',
  },
});
