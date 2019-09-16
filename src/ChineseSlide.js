import React, { Component } from 'react';
import './ChineseSlide.css';

class ChineseSlide extends Component {
	render() {
		return (
			<div className="container chineseContainer">
				<div className="chineseGroupContainer ">
					<div className="chineseBox">
						<img
							src="https://i.imgur.com/eF7tVKa.png"
							alt="Chinese Restaurant"
							className="chinesePictures"
							style={{ width: 420, height: 330 }}
						/>
						<img
							src="https://i.imgur.com/5z6lkBH.png"
							alt="Chinese Menu"
							className="chinesePictures"
							style={{ width: 420, height: 330 }}
						/>
						<img
							src="https://i.imgur.com/mXjYuqR.png"
							alt="Chinese App Flow"
							className="chinesePictures"
							style={{ width: 360, height: 270, margin: 22 }}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ChineseSlide;
