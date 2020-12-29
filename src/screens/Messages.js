import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { FAB } from 'react-native-paper';

function Messages({ navigation }) {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.titleContainer}> 
					<Text style={styles.title}>Messages</Text>
				</View>
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

export default Messages;
