import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';

const StackNavigator = createStackNavigator(
	{
		Login: {
			screen: Login
		},
		Profile: {
			screen: Profile
		},
		Messages: {
			screen: Messages
		}
	},
	{
		initialRouteName: 'Messages',
		headerMode: 'none',
		mode: 'modal'
	}
)

export default createAppContainer(StackNavigator);