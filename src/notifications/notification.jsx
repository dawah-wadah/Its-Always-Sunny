import React from "react";
import classnames from 'classnames';

class Notification extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      classes: {
        'notification': true,
        'show': false,
      }
    };
    this.show = this.show.bind(this);
	}

  componentDidMount(){
    setTimeout(() => this.show(), 300);
  }

  show(){
    this.setState({classes: {'notification': true, 'show': true}});
  }


	render() {

    var classes = classnames(this.state.classes);
		return (
			<div className={classes}>
				<div className="inner">
					<span>{this.props.notification.type}</span>
					<span>{this.props.notification.body}</span>
				</div>
			</div>
		);
	}
}

export default Notification;
