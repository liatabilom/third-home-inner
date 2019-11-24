import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

class ModalPicture extends Component {
	state = { isOpen: false };

	handleModal = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<div>
				<img
					src="https://i.imgur.com/wuiO8rI.png"
					alt="Chinese App Flow"
					className="chinesePictures"
					style={{ width: 550, height: 390, position: 'relative', left: 20 }}
					onClick={this.handleModal}
				/>
				<FontAwesomeIcon icon={faExpand} className="expandIcon" onClick={this.handleModal} />
				{this.state.isOpen && (
					<dialog
						className="dialog"
						style={{ position: 'absolute', top: -40, zIndex: 1 }}
						open
						onClick={this.handleModal}
					>
						<img
							src="https://i.imgur.com/N5CdN38.png"
							alt="Chinese App Flow"
							className="chinesePictures"
							style={{ width: 1000, height: 700 }}
						/>
					</dialog>
				)}
			</div>
		);
	}
}

export default ModalPicture;
