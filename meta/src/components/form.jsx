import "./form.css";
import React, { Component, useState } from "react";

class MainForm extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			selectedOption: null,
			selectedAmount: null,
			selectedAmountButton: null,
			showModal: false,
		};
		this.onValueChange = this.onValueChange.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
		this.onAmountChange = this.onAmountChange.bind(this);
		this.onAmountInput = this.onAmountInput.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onNameChange = this.onNameChange.bind(this);
	}

	onValueChange(event) {
		const value = event.target.value;
		this.setState({
			selectedOption: value,
		});
	}

	setShowModal = (value) => {
		this.setState({ showModal: value });
	};

	onAmountChange(event) {
		this.setState({
			selectedAmount: event.target.value,
			selectedAmountButton: event.target.value,
		});
	}

	onAmountInput(event) {
		const value = event.target.value;
		this.setState({
			selectedAmount: value,
			selectedAmountButton: null,
		});
	}

	onEmailChange(event) {
		this.setState({ email: event.target.value });
	}

	onNameChange(event) {
		this.setState({ name: event.target.value });
	}

	formSubmit(event) {
		event.preventDefault();
		this.setShowModal(true);
		setTimeout(() => {
			this.setState({ showModal: false });
		}, 2000);
		const { selectedOption, selectedAmount, email, name } = this.state;
		if (selectedOption && selectedAmount && email && name) {
			const donation = { name, email, amount: selectedAmount };
			this.props.onDonate(donation);
		}
	}

	render() {
		const {
			selectedOption,
			selectedAmount,
			email,
			name,
			selectedAmountButton,
		} = this.state;
		const amountInput = selectedAmountButton ? "" : selectedAmount;
		const isFormValid =
			selectedOption && (selectedAmount || amountInput) && email && name;
		return (
			<div className="form-container">
				<form className="form" onSubmit={this.formSubmit}>
					<div className="order-frequency-container">
						<div className="radio">
							<label className="frequency-options">
								<input
									className="radio-frequency"
									type="radio"
									value="month"
									checked={selectedOption === "month"}
									onChange={this.onValueChange}
								/>
								Ежемесячно
							</label>
						</div>
						<div className="radio">
							<label className="frequency-options">
								<input
									className="radio-frequency"
									type="radio"
									value="week"
									checked={selectedOption === "week"}
									onChange={this.onValueChange}
								/>
								Еженедельно
							</label>
						</div>
						<div className="radio">
							<label className="frequency-options">
								<input
									className="radio-frequency"
									type="radio"
									value="once"
									checked={selectedOption === "once"}
									onChange={this.onValueChange}
								/>
								Один раз
							</label>
						</div>
					</div>
					<div className="amounts-container">
						<button
							type="button"
							className={`amount-button ${
								selectedAmountButton === "100" ? "selected" : ""
							}`}
							onClick={this.onAmountChange}
							value="100"
						>
							100 ₸
						</button>
						<button
							type="button"
							className={`amount-button ${
								selectedAmountButton === "500" ? "selected" : ""
							}`}
							onClick={this.onAmountChange}
							value="500"
						>
							500 ₸
						</button>
						<button
							type="button"
							className={`amount-button ${
								selectedAmountButton === "1000"
									? "selected"
									: ""
							}`}
							onClick={this.onAmountChange}
							value="1000"
						>
							1,000 ₸
						</button>
						<input
							type="number"
							className="amount-input"
							onInput={this.onAmountInput}
							placeholder="Другая сумма"
							value={amountInput}
						/>
					</div>
					<input
						type="email"
						className="text-input"
						placeholder="E-mail"
						onInput={this.onEmailChange}
					/>
					<input
						type="text"
						className="text-input"
						placeholder="Имя"
						onInput={this.onNameChange}
					/>
					<button
						type="submit"
						className="submit-button"
						disabled={!isFormValid}
					>
						ПОЖЕРТВОВАТЬ
					</button>
				</form>
				{this.state.showModal && (
					<div className="modal">
						<div className="modal-content">
							<div className="loading"></div>
							<img src="/check.png" className="checkmark"></img>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default MainForm;
