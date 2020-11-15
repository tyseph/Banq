import React, { Component } from 'react';
import { Text, View, Button, Modal } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default class NavBar extends Component {

        constructor(props) {
                super(props);
                this.state = {
                        modalVisible: false,
                        budget: '',
                        authenticated: true,
                }
        }

        setModalVisible = (visible) => {
                this.setState({ modalVisible: visible });
        }


        onAdd = () => {
                auth().onAuthStateChanged(user => {

                        firestore()
                                .collection("Users" + user.uid)
                                .update({
                                        budget: this.state.budget
                                })
                                .then(() => {
                                        console.log('data updated!');
                                });

                })
                this.setState({
                        modalVisible: false
                })
        }

        render() {
                const { modalVisible } = this.state;
                return (
                        <View>
                                <Text>navBar!</Text>
                                <Button title="Budget" onPress={() => { this.setModalVisible(true) }} />
                                <Text>{this.state.budget}</Text>

                                <Modal animationType="slide"
                                        visible={modalVisible}
                                        onRequestClose={() => {
                                                Alert.alert("Modal has been closed.");
                                        }} >
                                        <View>
                                                <Text>Add Budget</Text>
                                                <TextInput placeholder="Enter amount..." onChangeText={(budget) => this.setState({ budget })} value={this.state.budget} />
                                                <Button title="Add" onPress={() => { this.setModalVisible(!modalVisible) }, this.onAdd} />
                                        </View>
                                </Modal>

                        </View>
                );
        }
}