import React from "react";
import Youtube from "react-youtube";

class YoutubePlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			start: 5,
			end: 10
		};
	}

	render() {
		const opts = {
			width: '1920',
      height: '100%',
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

		return <Youtube videoId={this.props.video} opts={opts} />;
	}
}

export default YoutubePlayer;
