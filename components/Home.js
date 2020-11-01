import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import NavBar from '../elements/NavBar';

export default class HomeScreen extends Component{
	
	constructor(){
		super();
		this.state = {
			openNavBar: false
		}
	}
	
	open = () => {
		this.setState({ openNavBar: true })
	}
	
	close = () => {
		this.setState({ openNavBar: false })
	}
	
	render(){
		if (this.state.openNavBar == false) {
			return (
				<View>
				<Text>Home!</Text>
				<Button title="Icon" onPress={ this.open } />
				</View>
				);
			}
			
			else {
				return(
					<View>
					<Button title="close" onPress={ this.close}/>
					<NavBar />
					</View>
					)
				}
			}
		}