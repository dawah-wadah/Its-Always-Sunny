import React, { Component } from "react";

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			video: "",
			start: null,
			end: null,
			title: ""
		};
	}

	_onChange(e) {
		e.currentTarget();
	}

	render() {
		return (
			<div className="input-field">
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
						<div className='spacer'></div>
						<div className="input-text">
							<input id="end" type="text" className="input" />
							<label htmlFor="end"> End Time</label>
						</div>
					</div>
					<div className="row">
						<div className="input-text">
							<input id="Title" type="text" className="input" />
							<label htmlFor="Title"> Title</label>
						</div>
					</div>
			</div>
		);
	}
}

export default Input;
