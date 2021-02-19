import React, { useState, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import { renderInputToolbar, renderActions, renderComposer, renderSend } from '../components/InputToolbar/InputToolbar';
import { renderAvatar, renderBubble, renderSystemMessage, renderMessage, renderMessageText, renderCustomView } from '../components/MessageContainer/MessageContainer';
import { View, Text } from 'react-native';

function MessageThread() {

	const [text, setText] = useState('');
	const [messages, setMessages] = useState([]);

	const initialMessages = [
		 {
			_id: 1,
			text: 'Hello developer',
			createdAt: new Date(Date.UTC(2016, 5, 12, 17, 20, 0)),
			user: {
			  _id: 2,
			  name: 'React Native',
			  avatar: 'https://placeimg.com/140/140/any',
			},
		 },
	];

	useEffect(() => {
		setMessages(initialMessages.reverse());
	}, []);

	const onSend = (newMessages = []) => {
		setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
	}

	return (
		<GiftedChat 
			messages={messages}
			text={text}
			onInputTextChanged={setText}
			onSend={onSend}
			user={{
				_id: 1,
				name: 'Elias',
				avatar: 'https://placeimg.com/140/140/any'
			}}
			alignTop
			alwaysShowSend
			renderAvatarOnTop
			bottomOffset={26}
			// renderInputToolbar={renderInputToolbar}
			renderActions={renderActions}
			renderComposer={renderComposer}
			// renderSend={renderSend}
			// renderAvatar={renderAvatar}
			// renderBubble={renderBubble}
			// renderSystemMessage={renderSystemMessage}
			// renderCustomView={renderCustomView}
			// isCustomViewBottom
			// messagesContainerStyle={{ backgroundColor: 'indigo' }}
		/>
	)
}

export default MessageThread;
