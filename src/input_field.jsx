import React from "react";

class InputField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			className: this.props.name,
			id: this.props.idName,
			tag: this.props.tag
		};
	}

	render() {
		return (
			<div className={this.state.className}>
				<input id={this.state.idName} type="text" />
				<label htmlFor={this.state.idName}>{this.state.tag}</label>
			</div>
		);
	}
}

export default InputField;
