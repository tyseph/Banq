import React, {Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Modal,
  TextInput,
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
  Picker,
  Item,
} from 'native-base';

import auth from '@react-native-firebase/auth';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  // SignOUt = () => {
  //   auth()
  //   .signOut()
  //   .then(() =>{
  //     window.alert('Signed Out');
  //   })
  // }

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  render() {
    //const [modalVisible, setModalVisible] = useState(false);

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
            style={{
              alignSelf: 'center',
              padding: 20,
              height: 500,
              width: 350,
              borderRadius: 20,
            }}>
            {/* <Grid>
              <Text style={styles.largeText}>Shops</Text>
            </Grid> */}
            <ScrollView>
              <Grid style={{marginTop: 0, paddingBottom: 30}}>
                <Row>
                  <Body>
                    <Text style={styles.rightText}>VENDIMAN</Text>
                  </Body>
                </Row>
                <Row style={{marginTop: 0, paddingBottom: 30}}>
                  <Picker iosHeader="Select one" mode="dropdown">
                    {/* //selectedValue={this.state.selected1}
                  //onValueChange={this.onValueChange.bind(this)}> */}
                    <Item label="Mahesh" value="key0" />
                    <Item label="Adarsh" value="key1" />
                    <Item label="Naveen" value="key2" />
                    <Item label="Vendiman" value="key3" />
                  </Picker>
                </Row>
                <Row>
                  <Col>
                    <Body>
                      <Text style={styles.rightTextSmall}>Lays Pack Blue</Text>
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
                        style={{fontSize: 15, color: 'black'}}
                      />
                    </Body>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Body>
                      <Text style={styles.rightTextSmall}>Lays Pack Blue</Text>
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
                        style={{fontSize: 15, color: 'black'}}
                      />
                    </Body>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Body>
                      <Text style={styles.rightTextSmall}>Lays Pack Blue</Text>
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
                        style={{fontSize: 15, color: 'black'}}
                      />
                    </Body>
                  </Col>
                </Row>
              </Grid>

              <Grid style={{marginTop: 0, paddingBottom: 30}}>
                <Row>
                  <Body>
                    <Text style={styles.rightText}>VENDIMAN</Text>
                  </Body>
                </Row>
                <Row style={{marginTop: 0, paddingBottom: 30}}>
                  <Picker iosHeader="Select one" mode="dropdown">
                    {/* //selectedValue={this.state.selected1}
                  //onValueChange={this.onValueChange.bind(this)}> */}
                    <Item label="Mahesh" value="key0" />
                    <Item label="Adarsh" value="key1" />
                    <Item label="Naveen" value="key2" />
                    <Item label="Vendiman" value="key3" />
                  </Picker>
                </Row>
                <Row>
                  <Col>
                    <Body>
                      <Text style={styles.rightTextSmall}>Lays Pack Blue</Text>
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
                        style={{fontSize: 15, color: 'black'}}
                      />
                    </Body>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Body>
                      <Text style={styles.rightTextSmall}>Lays Pack Blue</Text>
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
                        style={{fontSize: 15, color: 'black'}}
                      />
                    </Body>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Body>
                      <Text style={styles.rightTextSmall}>Lays Pack Blue</Text>
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
                        style={{fontSize: 15, color: 'black'}}
                      />
                    </Body>
                  </Col>
                </Row>
              </Grid>

              <Grid style={{marginTop: 0, marginBottom: 0, paddingBottom: 0}}>
                <Row>
                  <Col>
                    <Button
                      onPress={() => {
                        this.setModalVisible(true);
                      }}
                      style={styles.buttonStyle}>
                      <Text style={styles.buttonTextStyle}>Add</Text>
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      onPress={() => {
                        this.props.navigation.navigate('Home');
                      }}
                      style={styles.buttonStyle}>
                      <Text style={styles.buttonTextStyle}>Save Changes</Text>
                    </Button>
                  </Col>
                </Row>
              </Grid>
            </ScrollView>
          </Card>

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            statusBarTranslucent={true}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text
                  style={{
                    fontSize: 30,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Add Item
                </Text>

                <TextInput
                  style={styles.TextInput}
                  placeholder="Item Name"
                  value={this.state.name}
                  //onChangeText={value => this.setState({name: value})}
                />
                <TextInput
                  style={styles.TextInput}
                  keyboardType="number-pad"
                  placeholder="Item Price"
                  value={this.state.number}
                  //onChangeText={value => this.setState({number: value})}
                />

                <Button
                  title="Cancel"
                  onPress={() => {
                    this.setModalVisible(false);
                  }}
                  style={styles.buttonStyleModal}>
                  <Text style={styles.buttonTextStyle}>Okay</Text>
                </Button>
              </View>
            </View>
          </Modal>
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
  largeTextHead: {
    color: 'black',
    fontFamily: 'Oxygen-Bold',
    fontSize: 30,
    textAlign: 'center',
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
  buttonStyle: {
    borderRadius: 20,
    width: '98%',
    justifyContent: 'center',
    backgroundColor: '#EA5656',
    marginTop: 0,
  },
  buttonTextStyle: {
    fontSize: 16,
    fontFamily: 'Oxygen-Bold',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 1,
  },

  title: {
    color: 'purple',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 50,
  },
  Box: {
    margin: 5,
    padding: 25,
    borderWidth: 2,
    borderRadius: 25,
  },
  name: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
    marginRight: 50,
  },
  profession: {
    fontSize: 15,
    fontWeight: '200',
    padding: 10,
  },
  number: {
    fontSize: 20,
    fontWeight: '200',
  },
  centeredView: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '85%',
    height: '50%',
  },
  modalView: {
    borderWidth: 2,
    padding: 15,
    borderRadius: 25,
  },
  TextInput: {
    fontSize: 20,
    fontWeight: '200',
    borderBottomWidth: 1,
    paddingTop: 30,
  },

  buttonStyleModal: {
    borderRadius: 20,
    width: '98%',
    justifyContent: 'center',
    backgroundColor: '#EA5656',
    marginTop: 30,
    marginBottom: 20,
    paddingTop: 0,
  },
});
