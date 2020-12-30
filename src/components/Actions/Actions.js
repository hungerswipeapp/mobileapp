import React from 'react'
import { View, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';
import Action from '../Action/Action';

	const BackArrow = '../../../assets/Icons/BackArrow.png';
	const Dislike = '../../../assets/Icons/Dislike.png';
	const Like = '../../../assets/Icons/Like.png';
	const HungerSwipe = '../../../assets/Icons/HungerSwipe.png';


export default function Actions() {
	return (
		<>
			<Action action="BackArrow" image={require(BackArrow)}/>
			<Action action="Dislike"image={require(Dislike)}/>
			<Action action="Like" image={require(Like)}/>
			<Action action="HungerSwipe" image={require(HungerSwipe)} />
		</>
	)
}

