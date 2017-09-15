import React, { Component } from "react";
import "./App.css";
import Input from "./input";
import Youtube from "./youtube";
import { Switch, Route, HashRouter } from "react-router-dom";

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<HashRouter>
				<div className="app">
					<Switch>
						<Route exact path="/" component={Input} />
						<Route exact path="/player/:id" component={Youtube} />
					</Switch>
				</div>
			</HashRouter>
		);
	}
}

export default App;
