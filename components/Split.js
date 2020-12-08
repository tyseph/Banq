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

export default class Split extends Component {
  render() {
    return (
      <ImageBackground
      style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
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
            <View>
              <View style={{width: '100%', alignSelf: 'center'}}>
              <Button full
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>You Owe</Text>
              </Button>
              </View>

              <View style={{width: '100%', alignSelf: 'center'}}>
              <Button full
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>you are Owed</Text>
              </Button>
              </View>

              <View style={{width: '100%', alignSelf: 'center'}}>
              <Button full
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Split</Text>
              </Button>
              </View>
          <CardItem style={styles.cardItem}>
            <Body style={{margin: 25}}>
              <Text style={{alignSelf: 'center', fontSize: 30, fontWeight: '600', fontFamily: 'Oxygen-Bold'}}>SPLIT</Text>
              <View>
                <Text style={{alignSelf: 'flex-start', fontSize: 18,
                 fontWeight: '600', fontFamily: 'Oxygen-Bold'}}>You Owe:</Text>
                 <Text style={{fontSize: 15,
                 fontWeight: '600', fontFamily: 'Oxygen-Bold'}}>Jane :<Text style={{marginLeft: 20}}> Rs. 40</Text></Text>
              </View>
            </Body>
          </CardItem>
      </View>
        </ImageBackground>
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
    height: 'auto',
  },
  logocard: {
    borderRadius: 500,
    width: 200,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginTop: 5,
    borderRadius: 25,
    backgroundColor: '#EA5656',
    alignSelf: 'center',
    width: '90%',
  },
  buttonTextStyle: {
    fontSize: 18,
    fontFamily: 'Oxygen-Bold',
    fontWeight: 'bold',
    color: 'white',
  },
  linkTextStyle: {
    alignSelf: 'center',
    margin: 20,
    fontFamily: 'Oxygen-Light',
  },
  linkStyle: {
    color: 'blue',
  },
});
