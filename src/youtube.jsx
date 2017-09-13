import React from "react";
import Youtube from "react-youtube";
import TitleCard from "./titlecard.jsx";

class YoutubePlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			start: parseInt(this.props.start),
			end: parseInt(this.props.end),
			change: false
		};
	}

	render() {
		const opts = {
			width: "1920",
			height: "100%",
			playerVars: {
				autoplay: 1,
				controls: 0,
				disablekb: 1,
				iv_load_policy: 3,
				modestbranding: 1,
				showinfo: 0,
				enablejsapi: 1,
				start: this.state.start,
				end: this.state.end,
				origin: "https://dawah-wadah.github.io/"
			}
		};
		if (!this.state.change) {
			return (
				<Youtube
					videoId={this.props.video}
					opts={opts}
					onEnd={this._destroy.bind(this)}
				/>
			);
		} else {
			return <TitleCard title={this.props.title} />;
		}
	}

	_destroy(e) {
		e.target.destroy();
    this.setState({
      change: true
    });
	}
}

export default YoutubePlayer;
