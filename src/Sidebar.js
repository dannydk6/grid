import React, { Component } from 'react';
import './Sidebar.css'

export default class Sidebar extends Component {
	render() {
		console.log(this.props.sideBarOpen);
		let myClass = this.props.sideBarOpen ? 'sidebar-open':'sidebar-closed';
		console.log(myClass)
		return (
			<div className={myClass}>
				<p style={{margin: 0, paddingTop:10}}>Main</p>
				<a href="#" className="links">Character Profiles</a>
				<a href="#" className="links">World Hub</a>
				<a href="#" className="links">Battle Lobby</a>
				<a href="#" className="links">Store</a>

				<p>Battle</p>
				<a href="#" className="links">Forfeit Battle</a>
				<a href="#" className="links">Request Battle Hold</a>
				<a href="#" className="links">Battle Options</a>
			</div>
		);
	}
}
