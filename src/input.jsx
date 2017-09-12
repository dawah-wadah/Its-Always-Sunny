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
			<div className="input-field flex center column">
				<div className="row flex center">
					<div className="input-text flex">
						<div  className='spacer'>
							<input id="videoUrl" type="text" className="validate" />
							<label htmlFor="videoUrl"> URL to the Youtube Video</label>
						</div>
					</div>
				</div>
				<div className="row flex center">
					<div className="input-text flex">
            <div className='spacer'>
							<input id="start" type="text" className="validate" />
							<label className='right' htmlFor="start"> Start Time</label>
            </div>
					</div>
						<div className="input-text flex center">
              <div className='spacer'>
							<input id="end" type="text" className="validate" />
							<label htmlFor="end"> End Time</label>
						</div>
					</div>
				</div>
				<div className="row flex center">
					<div className="input-text">
						<div className='spacer'>
							<input id="title" type="text" className="validate" />
							<label htmlFor="title"> Title</label>
						</div>
					</div>
				</div>
				<div className="button">Generate</div>
			</div>
		);
	}
}

export default Input;
