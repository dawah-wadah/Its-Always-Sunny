import React, { Component } from "react";
import "./App.css";
import Input from "./input";

class App extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className="app">
				<Input />
			</div>
		);
	}
}

export default App;
