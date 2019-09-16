import React, { Component } from 'react';
import './ChineseSlide.css';

class ChineseSlide extends Component {
	render() {
		return (
			<div className="container chineseContainer" style={{ width: 1140 }}>
				<div className="chineseGroupContainer ">
					<div className="chineseBox">
						<img
							src="https://i.imgur.com/eF7tVKa.png"
							alt="Chinese Restaurant"
							className="chinesePictures"
							style={{ width: 200, height: 200 }}
						/>
						<img
							src="https://i.imgur.com/5z6lkBH.png"
							alt="Chinese Menu"
							className="chinesePictures"
							style={{ width: 150, height: 200 }}
						/>

						<img
							src="https://i.imgur.com/i4LWVDN.png"
							alt=""
							className="chinesePictures"
							style={{ width: 180, height: 200 }}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ChineseSlide;
