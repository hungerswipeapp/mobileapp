import React from 'react'
import { StyleSheet, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { Image, Icon } from 'react-native-elements';

const noUserPhoto = '../../assets/Icons/no-user.jpg';

function Profile({ navigation }) {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.mainContainer}>
						<Image 
							source={{ uri: noUserPhoto }}
							style={styles.image}
							/>
							<Text style={{ margin: 5, fontSize: 20}}>Name goes here</Text>
							<Text>Handle goes here</Text>
				</View>
				<View style={styles.middle}>
					<TouchableOpacity style={{marginBottom: 50}}>
						<Icon
							reverse
							size='34' 
							color="#f85db3"
							type="font-awesome-5"
							name='cog'
							onPress={() => navigation.push("Settings")}/>
						<Text style={{ alignSelf: 'center', color: '#f85db3' }}>SETTINGS</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{marginTop: 30}}>
						<Icon
							reverse
							size='34'
							color="#f85db3"
							type="font-awesome-5"
							name='camera'
							onPress={() => navigation.push("Add Photo")}/>
					<Text style={{ alignSelf: 'center', color: '#f85db3' }}>ADD PHOTO</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{marginBottom: 50}}>
						<Icon 
							reverse
							size='34'
							color='#f85db3'
							type="font-awesome-5"
							name='edit'
							onPress={() => navigation.push("Edit Info")}/>
					<Text style={{ alignSelf: 'center', color: '#f85db3' }}>EDIT INFO</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						borderBottomColor: 'grey',
						borderBottomWidth: 3,
						shadowOpacity: 1,
						shadowOffset: {height: 2, width: 0},
						marginTop: 10
					}}
				/>
				<View style={styles.bioContainer}>
					<View>
						<Text style={{ marginLeft: 20, marginRight: 20, fontSize: 25 }}>Bio</Text>
						<Text style={{ margin: 20 }}>Bio text</Text>
					</View>
					<View>
						<Text style={{ margin: 20 }}>Recently Visited</Text>
					</View>
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
	mainContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 2,
		//backgroundColor: '#ff007f',
		borderRadius: 20,
	},
	bioContainer: {
		alignItems: 'flex-start',
		justifyContent: 'space-around',
		flex: 3,
		//backgroundColor: 'grey',
		borderRadius: 20,
		marginTop: 10,
	},
	image: {
		width: 200,
		height: 200,
		borderRadius: 100
	},
	middle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		flex: 1,
		//backgroundColor: 'grey',
		borderRadius: 20,
		marginTop: 10,
	}
});

export default Profile;
