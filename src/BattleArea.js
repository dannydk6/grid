import React, { Component } from 'react';
import BattleEvent from './BattleEvent';

export default class BattleArea extends Component {
	constructor(props){
		super(props);
		this.anyRef = React.createRef();
	}
	componentDidUpdate(){
		this.anyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
	render() {
		const battleObjects = this.props.chatObjects.map((obj)=>{
			let orientation = '';
			if(obj.player === 1){
				orientation = "row-right"
			}else{
				orientation = "row-left";
			}

			if(obj.type === 'battle'){
				return <BattleEvent text={obj.text} color={obj.color} orientation={orientation}/>
			}
			return <BattleEvent text={obj.text} color="grey" orientation={orientation}/>

		});
		return (
			<div className="battle-area">
				{battleObjects}
				<div className="end" ref={this.anyRef}></div>
			</div>
		);
	}
}
