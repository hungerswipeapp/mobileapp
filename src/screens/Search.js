import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native';
import { Text, FAB } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';

function Search() {
	return (
		<>
			<View style={styles.container}>
				<SearchBar 
					value=""
					searchIcon={{ size: 24 }}
					lightTheme={true}
					round={true}
					inputStyle={{backgroundColor: 'white'}}
    				containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
    				placeholderTextColor={'#g5g5g5'}
    				placeholder='Search'
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
