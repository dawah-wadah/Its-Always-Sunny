import React, { Component } from "react";

class TitleCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: this.props.open,
			title: this.props.title
		};
	}

	render() {
		return (
			<div className="titleCard">
				<h1>{this.state.title}</h1>
			</div>
		);
	}
}

export default TitleCard;
