import React, { Component } from 'react';
import ChineseSlide from './ChineseSlide';
import './MainApp.css';

class MainApp extends Component {
	render() {
		return (
			<div>
				<h1>
					<header className="header .d-sm-flex">
						Na'dia
						<br />
						Correia Gonc,alves
					</header>
				</h1>
				<h2>
					<ChineseSlide />
				</h2>
			</div>
		);
	}
}

export default MainApp;
