import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { Text, FAB } from 'react-native-paper';

function Login({ navigation }) {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.titleContainer}> 
					<Text style={styles.title}>Login Page</Text>
				</View>
				<FAB 
					style={styles.fab}
					small
					icon='plus'
					label='Profile'
					onPress={() => navigation.navigate('Profile')}
				/>
		</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 10,
		paddingVertical: 20,
	},
	titleContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	title: {
		fontSize: 20,
	},
	fab: {
		position: 'absolute',
		margin: 20,
		right: 0,
		bottom: 10,
		backgroundColor: '#ff007f'
	}
});

export default Login
