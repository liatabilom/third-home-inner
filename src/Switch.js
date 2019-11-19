import React, { Component } from 'react';

class SwitchTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textDisplay: true,
			textTopEn:
				'Sofia is in her workplace and has to organise a birthday dinner reservation for a colleague of hers.',
			textBottomEn:
				'Sofia leaves work at 5pm and has a movie night planned with her boyfriend.Since they don’t want to be late for the cinema, they conviniently go to Din Tai Fung in a easy and quick way.',
		};
	}

	ToggleButton() {
		this.setState(prevState => ({
			textDisplay: !prevState.textDisplay,
			textTopPt:
				'A Sofia está no trabalho e tem de organizar um jantar de aniversário para uma colega do departamento.',
			textBottomPt:
				'A Sofia sai do trabalho às 17h e, já tem planos com o namorado para irem ao cinema à noite. Como sabem que vão passar perto do restaurante Din Tai Fung, decidem ir lá jantar de forma rápida.',
		}));
	}

	render() {
		return (
			<div class="custom-control custom-switch switch">
				<input type="checkbox" class="custom-control-input" id="customSwitch1" />
				<label class="custom-control-label" for="customSwitch1" onClick={() => this.ToggleButton()} />\
				<p className="topText">{!this.state.textDisplay ? this.state.textTopEn : this.state.textTopPt}</p>
				<br />
				<p className="bottomText">
					{!this.state.textDisplay ? this.state.textBottomEn : this.state.textBottomPt}
				</p>
			</div>
		);
	}
}

export default SwitchTest;
