import React, { Component } from 'react';

class ModalPicture extends Component {
	state = { isOpen: false };

	handleModal = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<div>
				<img
					src="https://i.imgur.com/mXjYuqR.png"
					alt="Chinese App Flow"
					className="chinesePictures"
					style={{ width: 540, height: 390, position: 'relative', left: 15 }}
					onClick={this.handleModal}
				/>
				{this.state.isOpen && (
					<dialog
						className="dialog"
						style={{ position: 'absolute', top: -10, zIndex: 1 }}
						open
						onClick={this.handleModal}
					>
						<img
							src="https://i.imgur.com/mXjYuqR.png"
							alt="Chinese App Flow"
							className="chinesePictures"
							style={{ width: 650, height: 590 }}
							onClick={this.handleModal}
						/>
					</dialog>
				)}
			</div>
		);
	}
}

export default ModalPicture;
