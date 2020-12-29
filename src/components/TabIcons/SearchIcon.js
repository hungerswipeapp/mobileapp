import React from 'react'
import { Image } from 'react-native';

const searchPNG = '../../../assets/Icons/search-outlined.png';

function SearchIcon() {
	return (
		<Image source={require(searchPNG)} />
	)
}

export default SearchIcon
