import React, { Component } from "react";
import titleMusic from './assets/Its Always Sunny in Philadelphia Theme.mp3';

class TitleCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: this.props.open,
			title: this.props.title
		};

		this.titleMusic = new Audio(titleMusic);
		this._play = this._play.bind(this);
	}

	_play(){
		this.titleMusic.play();
	}

	render() {

		return (
			<div className="titleCard">
				<div className='title'>{this.state.title}</div>
				{this._play()}
			</div>
		);
	}
}

export default TitleCard;
