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
			width: "90vw",
			height: "90vh",
			playerVars: {
				controls: 0,
				disablekb: 1,
				iv_load_policy: 3,
				autoplay: 1,
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
	// render() {
	// 	const videoSrc =
	// 		"https://www.youtube.com/embed/" +
	// 		this.props.video +
	// 		"?autoplay=" +
	// 		this.props.autoplay +
	// 		"&rel=" +
	// 		this.props.rel +
	// 		"&modestbranding=" +
	// 		this.props.modest;
	// 	return (
	// 		<div className="container">
	// 			<iframe
	// 				className="player"
	// 				type="text/html"
	// 				width="100%"
	// 				height="100%"
	// 				src={videoSrc}
	// 				frameborder="0"
	// 			/>
	// 		</div>
	// 	);
	// }

	_destroy(e) {
		e.target.destroy();
		this.setState({
			change: true
		});
	}
}

export default YoutubePlayer;
