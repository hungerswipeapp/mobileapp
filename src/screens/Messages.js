import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { FAB } from 'react-native-paper';
import FlatListView from '../components/FlastListView/FlatListView';

function Messages({ navigation }) {
	return (
		<>
			<View style={styles.container}>
				<FlatListView navigation={navigation}/>
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
