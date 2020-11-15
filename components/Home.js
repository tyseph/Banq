import React, {Component} from 'react';
import {Text, View, Button, FlatList} from 'react-native';

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
      <View>
        <Text>Home!</Text>
        <Button title="Icon" />
        <Button title="print" />
        <View>
          <Text>Banq</Text>
          <FlatList
            // data={this.state.userArr}
            keyExtractor={elem => elem.budget}
            renderItem={elem => (
              <View>
                <Text>{elem.item.budget}</Text>
              </View>
            )}
          />
        </View>
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
