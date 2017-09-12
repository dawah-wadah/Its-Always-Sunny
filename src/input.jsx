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
				<form className="input-form">
					<div className="row">
						<div className="foo">
							<input id="videoUrl" type="text" className="validate" />
							<label htmlFor="videoUrl"> URL to the Youtube App</label>
						</div>
					</div>
					<div className="row">
						<div className="foo">
							<input id="start" type="text" className="validate" />
							<label htmlFor="start"> Start Time</label>
						</div>
					</div>
					<div className="row">
						<div className="foo">
							<input id="end" type="text" className="validate" />
							<label htmlFor="end"> End Time</label>
						</div>
					</div>
					<div className="row">
						<div className="foo">
							<input id="title" type="text" className="validate" />
							<label htmlFor="title"> Title</label>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Input;
