import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Appbar, Title, Avatar, Icon } from 'react-native-paper';

function Header({ titleText, navigation }) {
	return (
		<Appbar.Header style={styles.headerContainer}>
			<View style={styles.container}>
				<Avatar.Icon icon="food" style={styles.icon}/>
				<Avatar.Icon icon="account-search" style={styles.icon}/>
				<Avatar.Icon icon="message" style={styles.icon}/>
				<Button title="press me"></Button>
			</View>
		</Appbar.Header>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: '#fff',
		margin: 10,
	},
	container: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row'
	},
	title: {
		color: '#fff'
	},
	icon: {
		backgroundColor: '#ff007f'
	}
});

export default Header;