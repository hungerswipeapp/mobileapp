import React from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity, Image } from 'react-native';

const BackArrow = '../../../assets/Icons/BackArrow.png';

export default function Action({ action, image }) {

	return (
		<TouchableOpacity style={styles.button}>
				<Image source={image}/>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: 'white',
		shadowOpacity: 0.35,
		shadowRadius: 20,
		shadowColor: '#363636',
		shadowOffset: {height: 20, width: 0},
		alignItems: 'center',
		justifyContent: 'center'
	}
});
