import React from "react";
import Youtube from "react-youtube";
import TitleCard from "./titlecard.jsx";

class YoutubePlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			video: "",
			start: null,
			end: null,
			title: "",
			change: false
		};
		this.getVideo = this.getVideo.bind(this);
	}

	componentDidMount() {
		this.getVideo();
	}

	getVideo() {
		const shareID = this.props.match.params.id;
		window.firebase
			.database()
			.ref("videos/" + shareID)
			.once("value", snapshot => {
				if (snapshot.val()) {
					this.setState({
						video: snapshot.val().video,
						start: snapshot.val().start,
						end: snapshot.val().end,
						title: snapshot.val().title
					});
				} else {
					this.props.history.push("/");
				}
			});
	}

	render() {
		const opts = {
			width: "900",
			height: "900",
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
					videoId={this.state.video}
					opts={opts}
					onEnd={this._destroy.bind(this)}
				/>
			);
		} else {
			return <TitleCard title={this.state.title} />;
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
