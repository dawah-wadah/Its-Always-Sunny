import React, { Component } from "react";

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			video: "",
			start: 0,
			end: 1,
			title: ""
		};
	}

	_onChange(e) {
		e.currentTarget();
	}

	render() {
		return (
			<div className="input-field">
				<form className="column">
					<div className="row">
						<div className="input-text">
							<input id="vidURL" type="text" className="input" />
							<label htmlFor="vidURL"> URL of a Youtube Video</label>
						</div>
					</div>
					<div className="row">
						<div className="input-text">
							<input id="start" type="text" className="input" />
							<label htmlFor="start"> Start Time</label>
						</div>
						<div className="input-text">
							<input id="end" type="text" className="input" />
							<label htmlFor="end"> End Time</label>
						</div>
					</div>
					<div className="row">
						<div className="input-text">
							<input id="Title" type="text" className="input" />
							<label htmlFor="Title"> Titleo</label>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Input;
