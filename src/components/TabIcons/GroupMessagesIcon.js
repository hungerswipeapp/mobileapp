import React from 'react'
import { Image } from 'react-native';

const searchPNG = '../../../assets/Icons/GroupMessages.png';

function GroupMessagesIcon() {
	return (
		<Image source={require(searchPNG)} />
	)
}

export default GroupMessagesIcon
