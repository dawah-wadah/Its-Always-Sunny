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
				<div className="form test">
					<div className="row">
						<p>test</p>
					</div>
					<div className="row">
						<div className="column">
							<p>test 2</p>
						</div>
						<div className="column">
							<p>test 3</p>
						</div>
					</div>
					<div className="row">
						<div className="column">
							<p>test 4</p>
						</div>
					</div>
					<div className="row">
						<p>test 5</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Input;
