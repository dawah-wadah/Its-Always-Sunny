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

		this._onChange = this._onChange.bind(this);
	}

	_onChange(e, field) {
		this.setState({[field] : e.currentTarget.value});
	}

	_handleSubmit(e){

		debugger
		console.log('clicked');
	}

	_getUrl(url){
		return url.split('v=').pop();
	}

	render() {
		return (
			<div className="input-field">
					<div className="row">
						<div className="input-text">
							<input id="vidURL" type="text" className="input" onChange={(e) => this._onChange(e, 'video')}/>
							<label htmlFor="vidURL"> URL of a Youtube Video</label>
						</div>
					</div>
					<div className="row">
						<div className="input-text">
							<input id="start" type="text" className="input" onChange={(e) => this._onChange(e, 'start')}/>
							<label htmlFor="start"> Start Time</label>
						</div>
						<div className='spacer'></div>
						<div className="input-text">
							<input id="end" type="text" className="input" onChange={(e) => this._onChange(e, 'end')} />
							<label htmlFor="end"> End Time</label>
						</div>
					</div>
					<div className="row">
						<div className="input-text">
							<input id="Title" type="text" className="input" onChange={(e) => this._onChange(e, 'title')} />
							<label htmlFor="Title"> Title</label>
						</div>
					</div>
					<div className='row'>
						<div className='button' onClick={this._handleSubmit.bind(this)}>Generate</div>
					</div>
			</div>
		);
	}
}

export default Input;
