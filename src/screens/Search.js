import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native';
import { Text, FAB } from 'react-native-paper';
import  SearchBar  from 'react-native-dynamic-search-bar';

function Search() {
	return (
		<>
			<View style={styles.container}>
			<SearchBar
				fontColor="#c6c6c6"
				iconColor="#c6c6c6"
				shadowColor="#282828"
				cancelIconColor="#c6c6c6"
				placeholder="Search here"
				onPress={() => alert("onPress")}
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

export default Search
