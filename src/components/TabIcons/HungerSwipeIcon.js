import React from 'react'
import { Image } from 'react-native';

const searchPNG = '../../../assets/Icons/HungerSwipeLogo.png';

function HungerSwipeIcon() {
	return (
		<Image source={require(searchPNG)} />
	)
}

export default HungerSwipeIcon;
