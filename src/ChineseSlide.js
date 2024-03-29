import React, { Component } from 'react';
import ModalPicture from './ModalPicture';
import './ChineseSlide.css';

class ChineseSlide extends Component {
	render() {
		return (
			<div className="chineseContainer">
				<div className="chineseGroupContainer">
					<div className="chineseBox">
						<img
							src="https://i.imgur.com/Vj0M2Zu.png"
							alt="Chinese Restaurant"
							className="chinesePictures"
							style={{ width: 640, height: 600 }}
						/>
						<img
							src="https://i.imgur.com/5z6lkBH.png"
							alt="Chinese Menu"
							className="chinesePictures"
							style={{ width: 640, height: 600 }}
						/>
						<br />
						<ModalPicture />
					</div>
				</div>
			</div>
		);
	}
}

export default ChineseSlide;
