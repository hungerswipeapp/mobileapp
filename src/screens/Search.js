import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native';
import { Text, FAB } from 'react-native-paper';

function Search({ navigation }) {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.titleContainer}> 
					<Text style={styles.title}>Search Page</Text>
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

export default Search
