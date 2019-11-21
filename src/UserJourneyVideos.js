import React, { Component } from 'react';
import './UserJourneyVideos.css';

class UserJourneyVideos extends Component {
	render() {
		return (
			<div className="user-journey-app">
				<div>
					<iframe
						title="User Journey 1"
						src="https://fast.wistia.com/embed/medias/ji0mzmsys1"
						allowtransparency="true"
						frameBorder="0"
						scrolling="no"
						className="user-journey-video"
						name="wistia_embed"
						width="80"
						height="170"
						allowFullScreen
						mozallowfullscreen="true"
						webkitallowfullscreen="true"
						oallowfullscreen="true"
						msallowfullscreen="true"
					></iframe>
					<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>
				</div>
				<br />
				<div>
					<iframe
						title="User Journey 2"
						src="https://fast.wistia.com/embed/medias/senv1rj91r"
						allowtransparency="true"
						frameBorder="0"
						scrolling="no"
						className="user-journey-video"
						name="wistia_embed"
						width="84"
						height="170"
						allowFullScreen
						mozallowfullscreen="true"
						webkitallowfullscreen="true"
						oallowfullscreen="true"
						msallowfullscreen="true"
					></iframe>
					<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>
				</div>
			</div>
		);
	}
}

export default UserJourneyVideos;
