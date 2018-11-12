import React, { Component } from 'react';
import './BattleEvent.css';

export default class BattleEvent extends Component {
	render() {
		return (
			<div className={"row " + this.props.orientation}>
				<div className={this.props.color + " battle-event-text"}>
					{this.props.text}
				</div>
			</div>
		);
	}
}

