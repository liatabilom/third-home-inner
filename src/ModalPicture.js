import React, { Component } from 'react';

class ModalPicture extends Component {
	state = { isOpen: false };

	handleModal = () => {
		this.setState({ isOpen: !this.state.isOpen });
		console.log('cliked');
	};

	render() {
		return (
			<div>
				<img
					src="https://i.imgur.com/mXjYuqR.png"
					alt="Chinese App Flow"
					className="chinesePictures"
					id="modal"
					style={{ width: 550, height: 490 }}
					onClick={this.handleModal}
				/>
				{this.state.isOpen && (
					<dialog
						className="dialog"
						style={{ position: 'absolute', top: 40 }}
						open
						onClick={this.handleModal}
					>
						<img
							src="https://i.imgur.com/mXjYuqR.png"
							alt="Chinese App Flow"
							className="chinesePictures"
							id="modal"
							style={{ width: 550, height: 490 }}
							onClick={this.handleModal}
						/>
					</dialog>
				)}
			</div>
		);
	}
}

export default ModalPicture;
