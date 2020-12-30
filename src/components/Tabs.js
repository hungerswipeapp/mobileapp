import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Search from '../screens/Search';
import TabIcon from './TabIcons/TabIcon';

const HomeIcon = '../../assets/Icons/HungerSwipeLogo.png';
const SearchIcon = '../../assets/Icons/search-outlined.png';
const GroupMessagesIcon = '../../assets/Icons/GroupMessages.png';
const AccountIcon = '../../assets/Icons/AccountIcon.png';

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
				component={Messages} 
				options={() => ({
					tabBarIcon: () => {
						return <TabIcon image={require(GroupMessagesIcon)} />
					}
				})}/>
			<Tab.Screen 
				name="Profile" 
				component={Profile} 
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