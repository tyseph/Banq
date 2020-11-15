import React, {Component} from 'react';
// import {View, Button, FlatList} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
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
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>THIS IS A CARD</Text>
              </Body>
            </CardItem>
          </Card>
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
