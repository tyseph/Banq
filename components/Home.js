import React, {Component} from 'react';
import {ImageBackground, Image} from 'react-native';
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
      <Container>
        <Content>
          <Grid>
            <Row
              style={{
                height: 400,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}>
              <ImageBackground
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  width: '100%',
                  height: '100%',
                  justifyContent: 'flex-start',
                  // alignItems: 'center',
                  opacity: 1,
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
              </ImageBackground>
            </Row>

            <Row style={{backgroundColor: 'black', height: 300}}>
              <Card transparent>
                <CardItem transparent>
                  <Thumbnail source={require('../assets/thumbnail.png')} />
                  <Body>
                    <Text
                      style={{
                        color: 'white',
                      }}>
                      NativeBase
                    </Text>
                    <Text
                      note
                      style={{
                        color: 'black',
                      }}>
                      > GeekyAnts
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Row>
          </Grid>
        </Content>
      </Container>
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
