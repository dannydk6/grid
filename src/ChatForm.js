import React, { Component } from 'react';

export default class ChatForm extends Component {
	static defaultProps = {
		addChatElement(){}
	}
	constructor(props){
		super(props);

		this.state={
			inputValue: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleChange(e) {
		this.setState({
			inputValue: e.target.value
		});
	}

	handleKeyPress(e){
		if(e.key == "Enter" && this.state.inputValue.length > 0){
			this.props.addChatElement(this.state.inputValue);
			console.log(this.state.inputValue);
			this.setState({inputValue: ''})
		}
	}

	render() {
		return (
			<input
				type="text"
				name="chat-input"
				placeholder="Type text here..."
				className="chat-form"
				value={this.state.inputValue}
				onChange={this.handleChange}
				onKeyPress={this.handleKeyPress}
			/>
		);
	}
}
