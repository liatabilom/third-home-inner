import React, { Component } from 'react';

class Switch extends Component {
	state = { isChecked: false };

	handleCheck = () => {
		this.setState({ isChecked: !this.state.isChecked });
		console.log('clicked');
		if (this.state.isChecked === false) {
			alert("It's WORKING!!!");
		}
	};

	render() {
		return (
			<div className="switchVideo">
				<div className="custom-control custom-switch">
					<input
						type="checkbox"
						className="custom-control-input"
						id="customSwitch1"
						onClick={this.handleCheck}
					/>
					<label className="custom-control-label" htmlFor="customSwitch1" />
				</div>
			</div>
		);
	}
}

export default Switch;
