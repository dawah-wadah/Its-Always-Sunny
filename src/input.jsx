import React, { Component } from "react";
import TitleCard from './titlecard.jsx';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			video: "",
			start: null,
			end: null,
			title: "Wadah is DABES",
			hide: false
		};

		this._onChange = this._onChange.bind(this);
	}

	_onChange(e, field) {
		this.setState({ [field]: e.currentTarget.value });
	}

	_validYoutubeLink(url) {
		if (url !== undefined || url !== "") {
			const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
			const match = url.match(regExp);
			if (match && match[2].length === 11) {
				return true;
			} else {
				return false;
			}
		} else return false;
	}

	_validTime(time) {
		if (time !== null || time !== "") {
			const regExp = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(
				time
			);
			return regExp;
		} else {
			console.log("Not a valid time");
		}
	}

	_handleSubmit(e) {
		if (
			this._validYoutubeLink(this.state.video) &&
			this._validTime(this.state.start) &&
			this._validTime(this.state.end) &&
			this.state.title !== ""
		) {
			console.log(this._getUrl(this.state.video));
			console.log(this._getTime(this.state.start));
			console.log(this._getTime(this.state.end));
			console.log(this.state.title);
			this.setState({ hide: true });
		} else {
			console.log("invalid link");
		}
		if (this._validTime(this.state.start));

		console.log("clicked");
	}

	_getUrl(url) {
		return url.split("v=").pop();
	}

	_getTime(time) {
		let num = time.split(":"),
			sec = 0,
			min = 1;
		while (num.length > 0) {
			sec += min * parseInt(num.pop(), 10);
			min *= 60;
		}
		return sec;
	}

	render() {
		if (this.state.hide) {
			return (
				<div className="input-field">
					<div className="row">
						<div className="input-text">
							<input
								id="vidURL"
								type="text"
								className="input"
								onChange={e => this._onChange(e, "video")}
							/>
							<label htmlFor="vidURL"> URL of a Youtube Video</label>
						</div>
					</div>
					<div className="row">
						<div className="input-text">
							<input
								id="start"
								type="text"
								className="input"
								onChange={e => this._onChange(e, "start")}
							/>
							<label htmlFor="start"> Start Time</label>
						</div>
						<div className="spacer" />
						<div className="input-text">
							<input
								id="end"
								type="text"
								className="input"
								onChange={e => this._onChange(e, "end")}
							/>
							<label htmlFor="end"> End Time</label>
						</div>
					</div>
					<div className="row">
						<div className="input-text">
							<input
								id="Title"
								type="text"
								className="input"
								onChange={e => this._onChange(e, "title")}
							/>
							<label htmlFor="Title"> Title</label>
						</div>
					</div>
					<div className="row">
						<div className="button" onClick={this._handleSubmit.bind(this)}>
							Generate
						</div>
					</div>
				</div>
			);
		} else {
			return <TitleCard title={this.state.title} />;
		}
	}
}

export default Input;
