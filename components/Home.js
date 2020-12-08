import React, {Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from 'react-native';
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

//import NavBar from '../elements/NavBar';
import firestore from '@react-native-firebase/firestore';

import auth from '@react-native-firebase/auth';

export default class HomeScreen extends Component {
  // 	constructor(props) {
  // 		super(props);
  // 		this.state = {
  // 			openNavBar: false,
  // 			authenticated: false,
  // 			userArr: []
  // 		};
  // 	}

  // 	open = () => {
  // 		this.setState({ openNavBar: true });
  // 	};

  // 	close = () => {
  // 		this.setState({ openNavBar: false });
  // 	};

  // 	print = () => {
  // 		auth().onAuthStateChanged(user => {
  // 			if(user){
  // 			firestore().collection("Users" + user.uid)
  // 			.onSnapshot(querySnapshot => {
  // 				const userArr = [];
  // 				querySnapshot.forEach((res) => {
  // 					const { budget } = res.data();
  // 					userArr.push({
  // 						key: res.id,
  // 						res,
  // 						budget
  // 					});
  // 				});
  // 				this.setState({
  // 					userArr
  // 				});
  // 			});
  // 		}
  // 		else{
  // 			this.props.navigate.navigate
  // 		}
  // 	})
  // }

  render() {
    // if (this.state.openNavBar == false) {
    return (
      <ImageBackground
        style={styles.imgBackground}
        imageStyle={styles.imgBG}
        source={require('../assets/bg.png')}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logoStyle}
        />
        <View>
          <Card transparent style={styles.nameCard}>
            <CardItem style={styles.cardItemStyle}>
              <Left>
                <Thumbnail large source={require('../assets/thumbnail.png')} />
                <Body>
                  <Text note style={{color: 'white'}}>
                    Welcome Back
                  </Text>
                  <Text style={{color: 'white'}}>Sajal Ganjewala</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Button full style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Add Partition</Text>
          </Button>
          <ScrollView>
            <View style={{height: 10000}}>
              <Card
                style={{
                  alignSelf: 'center',
                  padding: 20,
                  height: 100,
                  width: 350,
                  borderRadius: 20,
                }}>
                <Grid>
                  <Col>
                    <Body
                      style={{
                        textAlign: 'left',
                        padding: 0,
                        height: 100,
                        width: 300,
                        borderRadius: 20,
                      }}>
                      <Text style={styles.largeText}>BANQ</Text>
                      <Text note style={styles.smallText}>
                        Budget
                      </Text>
                    </Body>
                  </Col>
                  <Col>
                    <Body>
                      <Text style={styles.rightText}>INR 5673</Text>
                    </Body>
                  </Col>
                </Grid>
              </Card>

              <Card
                style={{
                  alignSelf: 'center',
                  padding: 20,
                  height: 150,
                  width: 350,
                  borderRadius: 20,
                }}>
                <Grid>
                  <Col>
                    <Body
                      style={{
                        textAlign: 'left',
                        padding: 0,
                        height: 100,
                        width: 300,
                        borderRadius: 20,
                      }}>
                      <Text style={styles.largeText}>Total</Text>
                      <Text note style={styles.smallText}>
                        Cash Available
                      </Text>
                    </Body>
                  </Col>
                  <Col>
                    <Body>
                      <Text style={styles.rightText}>INR 5637</Text>
                    </Body>
                  </Col>
                </Grid>
                <Grid style={{marginTop: 0}}>
                  <Col>
                    <Body
                      style={{
                        textAlign: 'left',
                        padding: 0,
                        height: 100,
                        width: 300,
                        borderRadius: 20,
                      }}>
                      <Text style={styles.smallText}>Days Left</Text>
                      <Text note style={styles.largeText}>
                        Days in Month
                      </Text>
                    </Body>
                  </Col>
                  <Col>
                    <Body>
                      <Text style={styles.rightText}>INR 5673</Text>
                    </Body>
                  </Col>
                </Grid>
              </Card>
              <Card
                style={{
                  backgroundColor: 'green',
                  alignSelf: 'center',
                  padding: '3%',
                  height: 100,
                  width: 350,
                  borderRadius: 20,
                }}>
                <Grid>
                  <Col
                    size={3}
                    style={{borderRadius: 20}}>
                    <Body
                      style={{
                        textAlign: 'left',
                        height: 100,
                        width: '80%',
                        marginTop: 5,
                        borderRadius: 20,
                      }}>
                      <Text style={{alignSelf: 'flex-start', padding: 2}}>Total Budget</Text>
                      <Text style={{alignSelf: 'flex-start', padding: 2}}>Cash left</Text>
                      <Text style={{alignSelf: 'flex-start', padding: 2}}>Mahesh</Text>
                    </Body>
                  </Col>
                  <Col size={1}>
                    <Body style={{flexDirection: 'row'}}>
                      <Text>pencil</Text>
                      <Text style={{marginLeft: 20}}>Save</Text>
                    </Body>
                  </Col>
                </Grid>
              </Card>

              {/* pie chart */}
              <Card
                style={{
                  alignSelf: 'center',
                  padding: 20,
                  height: 150,
                  width: 350,
                  borderRadius: 20,
                }}>
                <Grid>
                  <Col
                    size={2}
                    style={{backgroundColor: 'red', borderRadius: 20}}>
                    <Body
                      style={{
                        textAlign: 'left',
                        padding: 0,
                        height: 100,
                        width: 300,
                        borderRadius: 20,
                      }}>
                      <Text style={styles.largeText}>LEGEND</Text>
                    </Body>
                  </Col>
                  <Col size={3}>
                    <Body>
                      <Text style={styles.rightText}>PIE CHART HERE</Text>
                    </Body>
                  </Col>
                </Grid>
              </Card>
              <Card
                style={{
                  alignSelf: 'center',
                  padding: 20,
                  height: 100,
                  width: '90%',
                  borderRadius: 20,
                }}>
                <View>
                  <Grid>
                    <Row>
                      <Col>
                        <Text>Mathri</Text>
                      </Col>
                      <Col>
                        <Text>8-10-12</Text>
                      </Col>
                    </Row>
                    <Col style={{marginLeft: 300, marginTop: 10}}>
                      <Text>5</Text>
                    </Col>

                    <Row style={{marginTop: 20}}>
                      <Col>
                        <Text>Naveen's Tea Stall</Text>
                      </Col>
                      <Col>
                        <Text>Mahesh</Text>
                      </Col>
                    </Row>
                  </Grid>
                </View>
              </Card>

              <Card
                style={{
                  alignSelf: 'center',
                  padding: 20,
                  height: 100,
                  width: '90%',
                  borderRadius: 20,
                }}>
                <View>
                  <Grid>
                    <Row>
                      <Col>
                        <Text>Mathri</Text>
                      </Col>
                      <Col>
                        <Text>8-10-12</Text>
                      </Col>
                    </Row>

                    <Row style={{marginTop: 20}}>
                      <Col>
                        <Text>Naveen's Tea Stall</Text>
                      </Col>
                      <Col>
                        <Text>Mahesh</Text>
                      </Col>
                    </Row>
                  </Grid>
                </View>
              </Card>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
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
  buttonStyle: {
    marginLeft: 20,
    borderRadius: 25,
    width: '50%',
    backgroundColor: 'gray',
  },
  buttonTextStyle: {
    fontSize: 18,
    fontFamily: 'Oxygen-Bold',
    fontWeight: '700',
    color: 'white',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
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
  largeText: {
    color: 'black',
    fontFamily: 'Oxygen-Bold',
  },
  smallText: {
    color: 'black',
  },
  rightText: {color: 'black'},
});
