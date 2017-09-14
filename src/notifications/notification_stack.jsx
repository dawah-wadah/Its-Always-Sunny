import React from "react";
import Notification from "./notification.jsx";

class NotificationStack extends React.Component {
	constructor(props) {
		super(props);
	}

	_showNotifications(notifications) {
		setInterval(notification => {
			while (notifications.length) {
				notifications.pop();
			}
		}, 6000);
	}

	render() {
		const allNotifications = this.props.notifications.map(message => (
			<Notification
				key={Math.floor(Math.random(0, 1) * 834)}
				notification={message}
			/>
		));

		this._showNotifications(allNotifications);

		return <div className="notification-stack">{allNotifications}</div>;
	}
}

export default NotificationStack;
