import React, {Component} from 'react';
import {ImageBackground, StyleSheet, View, Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Grid,
  Col,
  Row,
  Left,
  Thumbnail,
  Button,
  Icon,
  Right,
} from 'native-base';

import auth from '@react-native-firebase/auth';

export default class Profile extends Component {
  // SignOUt = () => {
  //   auth()
  //   .signOut()
  //   .then(() =>{
  //     window.alert('Signed Out');
  //   })
  // }

  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <ImageBackground
          style={styles.imgBackground}
          imageStyle={styles.imgBG}
          source={require('../assets/bg.png')}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logoStyle}
          />
          <CardItem style={styles.logocard}>
            <Image
              source={require('../assets/banqLogo.png')}
              style={{
                width: '90%',
                resizeMode: 'contain',
                margin: 10,
              }}
            />
          </CardItem>

          <Card
            transparent
            style={{
              alignSelf: 'center',
              padding: 5,
              height: 130,
              width: 350,
              borderRadius: 20,
            }}>
            <Grid style={{marginTop: 0, paddingBottom: 30}}>
              <Col>
                <Body>
                  <CardItem
                    style={{
                      padding: 0,
                      margin: 0,
                      height: 100,
                      width: '50%',
                      borderRadius: 20,
                      backgroundColor: 'red',
                    }}>
                    <Text>ADD</Text>
                  </CardItem>
                </Body>
              </Col>
              <Col>
                <Body>
                  <CardItem
                    style={{
                      padding: 0,
                      margin: 0,
                      height: 100,
                      width: '50%',
                      borderRadius: 20,
                      backgroundColor: 'red',
                    }}>
                    <Text>DEDUCT</Text>
                  </CardItem>
                </Body>
              </Col>
            </Grid>
          </Card>

          <Card
            style={{
              alignSelf: 'center',
              padding: 20,
              height: 300,
              width: 350,
              borderRadius: 20,
            }}>
            <Grid>
              <Body
                style={{
                  textAlign: 'left',
                  padding: 0,
                  height: 100,
                  width: 300,
                  borderRadius: 20,
                  marginTop: 50,
                  paddingBottom: 10,
                }}>
                <Text style={styles.largeText}>Shops</Text>
              </Body>
            </Grid>
            <Grid style={{marginTop: 0, paddingBottom: 30}}>
              <Col>
                <Body>
                  <Text style={styles.rightTextSmall}>Vendiman</Text>
                </Body>
              </Col>
              <Col>
                <Body
                  style={{
                    textAlign: 'left',
                    padding: 0,
                    height: 100,
                    width: 300,
                    borderRadius: 20,
                  }}>
                  <Icon
                    type="FontAwesome"
                    name="arrow-circle-o-right"
                    style={{fontSize: 30, color: 'black'}}
                  />
                </Body>
              </Col>
            </Grid>
          </Card>

          {/* LOGOUT */}
          {/* <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              rounded
              // onPress={() => {this.props.navigation.navigate('Home')}}
              style={styles.buttonStyleLogout}>
              <Text style={styles.buttonTextStyle}>Logout</Text>
            </Button>
          </View> */}
        </ImageBackground>
      </View>
    );
    // } else {
    //   return (
    //     <View>
    //       <Button title="close" onPress={this.close} />
    //       <NavBar />
    //     </View>
    //   );
    // }
  }
}

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  imgBG: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  logoStyle: {
    width: 40,
    height: 51,
    resizeMode: 'contain',
    justifyContent: 'flex-start',
    padding: 25,
    margin: 10,
  },
  nameCard: {textAlign: 'center', padding: 20},
  cardItemStyle: {backgroundColor: 'transparent'},
  largeTextHead: {
    color: 'black',
    fontFamily: 'Oxygen-Bold',
    fontSize: 30,
  },
  largeText: {
    color: 'black',
    fontFamily: 'Oxygen-Bold',
    fontSize: 20,
  },
  logocard: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'transparent',
  },
  smallTextHead: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Oxygen-Regular',
  },
  smallTextHead: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Oxygen-Regular',
  },
  rightText: {
    color: 'black',
    fontFamily: 'Oxygen-Bold',
    fontSize: 20,
  },
  rightTextSmall: {
    color: 'black',
    fontFamily: 'Oxygen-Regular',
    fontSize: 15,
  },
  buttonStyleLogout: {
    borderRadius: 25,
    width: '50%',
    justifyContent: 'center',
    backgroundColor: '#EA5656',
    marginTop: 15,
  },
  buttonTextStyle: {
    fontSize: 30,
    fontFamily: 'Oxygen-Bold',
    fontWeight: 'bold',
    color: 'white',
  },
});
