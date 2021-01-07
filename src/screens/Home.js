import React, { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native';
import { Text, FAB } from 'react-native-paper';
import Actions from '../components/Actions/Actions';

function Home() {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.photoContainer}> 
				</View>
				<View style={styles.bottomContainer}>
					<Actions />
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
	photoContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 6,
		backgroundColor: '#ff007f',
		borderRadius: 20
	},
	bottomContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	button: {
		backgroundColor: '#ff007f',
		borderRadius: 10,
	}
});

export default Home;
