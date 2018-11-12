import React, { Component } from 'react';
import './UserProfileMenu.css';

export default class UserProfileMenu extends Component {

	render() {
		return (
			<div className='pop-menu'>
				<a className='links' href="#">User Home</a>
				<a className='links' href="#">Inbox (Messages) </a>
				<a className='links' href="#">User Settings </a>
				<a className='links' href="#">Log Out (Forfeits Battle)</a>
            </div>
		);
	}
}
