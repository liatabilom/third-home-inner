import React, { Component } from 'react';

class Switch extends Component {
	state = {
		isChecked: false,
		topParagraph:
			'Sofia is in her workplace and has to organise a birthday dinner reservation for a colleague of hers.',
		bottomParagraph:
			'Sofia leaves work at 5pm and has a movie night planned with her boyfriend.Since they don’t want to be late for the cinema, they conviniently go to Din Tai Fung in a easy and quick way.',
	};

	handleCheck = () => {
		this.setState({
			isChecked: !this.state.isChecked,
			topParagraph:
				'A Sofia está no trabalho e tem de organizar um jantar de aniversário para uma colega do departamento.',
			bottomParagraph:
				'A Sofia sai do trabalho às 17h e, já tem planos com o namorado para irem ao cinema à noite. Como sabem que vão passar perto do restaurante Din Tai Fung, decidem ir lá jantar de forma rápida.',
		});
		console.log('clicked');
	};

	render() {
		return (
			<div className="switchVideo">
				<div className="custom-control custom-switch">
					<input
						type="checkbox"
						className="custom-control-input"
						id="customSwitch1"
						checked={isChecked}
						onChange={this.handleCheck}
					/>
					<label className="custom-control-label" htmlFor="customSwitch1"></label>
				</div>
			</div>
		);
	}
}

export default Switch;
