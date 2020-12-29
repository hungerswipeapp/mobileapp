import React from 'react'
import { Image } from 'react-native';

const searchPNG = '../../../assets/Icons/AccountIcon.png';

function AccountIcon() {
	return (
		<Image source={require(searchPNG)} />
	)
}

export default AccountIcon;
