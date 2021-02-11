import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Search from '../screens/Search';
import TabIcon from './TabIcons/TabIcon';
import MessageThread from '../screens/MessageThread';
import Settings from '../screens/Settings';
import EditInfo from '../screens/EditInfo';
import AddPhoto from '../screens/AddPhoto';

const HomeIcon = '../../assets/Icons/HungerSwipeLogo.png';
const SearchIcon = '../../assets/Icons/search-outlined.png';
const GroupMessagesIcon = '../../assets/Icons/GroupMessages.png';
const AccountIcon = '../../assets/Icons/AccountIcon.png';

const MessagesStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MessagesStackScreen() {
	return (
		<MessagesStack.Navigator
			screenOptions={{
				showLabel: false
			}}>
			<MessagesStack.Screen 
				name="Messages" 
				component={Messages} 
				/>
			<MessagesStack.Screen 
				name="MessageThread" 
				component={MessageThread}
				options={({ route }) => ({
					title: route.params.thread.name
				})} 
				/>
		</MessagesStack.Navigator>
	);
}

function ProfileStackScreen() {
	return (
		<ProfileStack.Navigator>
			<ProfileStack.Screen 
				name="Profile"
				component={Profile}
				options={{}}
			/>
			<ProfileStack.Screen 
				name="Add Photo"
				component={AddPhoto}
			/>
			<ProfileStack.Screen
				name="Settings"
				component={Settings} 
			/>
			<ProfileStack.Screen 
				name="Edit Info"
				component={EditInfo}
			/>
		</ProfileStack.Navigator>
	);
}

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
						return <TabIcon image={require(HomeIcon)}/>
					}
				})}/>
			<Tab.Screen 
				name="Search" 
				component={Search} 
				options={() => ({
					tabBarIcon: () => {
						return <TabIcon image={require(SearchIcon)} />
					}
				})}/>
			<Tab.Screen 
				name="Messages" 
				component={MessagesStackScreen} 
				options={() => ({
					tabBarIcon: () => {
						return <TabIcon image={require(GroupMessagesIcon)} />
					}
				})}/>
			<Tab.Screen 
				name="Profile" 
				component={ProfileStackScreen} 
				options={() => ({
					tabBarIcon: () => {
						return <TabIcon image={require(AccountIcon)} />
					}
				})}/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default Tabs;