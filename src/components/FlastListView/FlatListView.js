import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

const FlatListView = ({ navigation }) => {

	return (
		<>
			<FlatList 
				data={[
					{key: 'Devin1',
						name: 'Devin'},
					{key: 'Dan',
						name: 'Dan'},
					{key: 'Dominic',
						name: 'Dominic'},
					{key: 'Jackson',
						name: 'Jackson'},
					{key: 'James',
						name: 'James'},
					{key: 'Joel',
						name: 'Joel'},
					{key: 'Jillian',
						name: 'Jillian'},
					{key: 'Jimmy',
						name: 'Jimmy'},
					{key: 'Julie',
						name: 'Julie'},
					{key: 'Devin2',
						name: 'Devin'},
					{key: 'Devin3',
						name: 'Devin'},
					{key: 'Devin4',
						name: 'Devin'},
					{key: 'Devin5',
						name: 'Devin'},
					{key: 'Devin6',
						name: 'Devin'},
					{key: 'Devin7',
						name: 'Devin'},
					{key: 'Devin8',
						name: 'Devin'},
				]}
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.listItem} onPress={() => navigation.push("MessageThread")}>
						<Text style={styles.item}>{item.name}</Text>
					</TouchableOpacity>
				)}/>
		</>
	)
}

const styles = StyleSheet.create({
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
	listItem: {
		borderBottomWidth: 1,
		borderBottomColor: '#d3d3d3',
		marginBottom: 30
	}
})

export default FlatListView;
