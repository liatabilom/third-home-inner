import React, { Component } from 'react';
import ChineseSlide from './ChineseSlide';
import UserJourneyVideos from './UserJourneyVideos';
import Switch from './Switch';
import './MainApp.css';

class MainApp extends Component {
	render() {
		return (
			<div>
				<div className="header">
					<header>
						<a href="https://www.correiagoncalves.com" style={{ textDecoration: 'none', color: '#80848F' }}>
							Na'dia
							<br />
							Correia Gonc,alves
						</a>
					</header>
				</div>
				<div className="container">
					<div className="row">
						<div className="card-body p-0 col-md-12 border border-dark">
							<div className="text">
								<ChineseSlide />
								<UserJourneyVideos />
								<Switch />
							</div>
						</div>
						<svg
							width="20"
							height="130"
							viewBox="0 0 26 151"
							fill="none"
							className="vector"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M25 1C6.88904 23.8352 -18.4663 85.6046 25 150" stroke="#80848F" />
						</svg>
						<img src="https://i.imgur.com/i9wrUux.png" alt="Tablet" className="tablet" />
						<span className="staff text">2. Staff App</span>
					</div>
				</div>
			</div>
		);
	}
}

export default MainApp;
