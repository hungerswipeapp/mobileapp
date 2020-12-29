import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from '../screens/Login';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import { Ionicons } from '@expo/vector-icons';
import Search from '../screens/Search';
import SearchIcon from './TabIcons/SearchIcon';
import HungerSwipeIcon from './TabIcons/HungerSwipeIcon';
import GroupMessagesIcon from './TabIcons/GroupMessagesIcon';
import AccountIcon from './TabIcons/AccountIcon';

const Tab = createMaterialTopTabNavigator();

function Tabs() {
	return (
		<NavigationContainer>
			<Tab.Navigator 
				style={{ marginTop: 40 }}
				tabBarOptions={{
					activeTintColor: '#ff007f',
					inactiveTintColor: 'gray',
					showIcon: true,
					showLabel: false
				}}
				>
			<Tab.Screen 
				name="Home" 
				component={Home} 
				options={() => ({
					tabBarIcon: () => {
						return <HungerSwipeIcon />
					}
				})}/>
			<Tab.Screen 
				name="Search" 
				component={Search} 
				options={() => ({
					tabBarIcon: () => {
						return <SearchIcon />
					}
				})}/>
			<Tab.Screen 
				name="Messages" 
				component={Messages} 
				options={() => ({
					tabBarIcon: () => {
						return <GroupMessagesIcon />
					}
				})}/>
			<Tab.Screen 
				name="Profile" 
				component={Profile} 
				options={() => ({
					tabBarIcon: () => {
						return <AccountIcon />
					}
				})}/>
			</Tab.Navigator>
		</NavigationContainer>
	// <View>
	// 	<Text>Tabs</Text>
	// </View>
	);
}

export default Tabs;