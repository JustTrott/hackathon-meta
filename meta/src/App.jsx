import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import MainForm from "./components/form";
import Leaderboard from "./components/leaderboard";
import React, { Component } from "react";

class App extends Component {
	constructor() {
		super();
		this.state = {
			donations: [
				{ name: "John Smith", amount: 1000 },
				{ name: "Jane Doe", amount: 500 },
				{ name: "Bob Johnson", amount: 250 },
				{ name: "Alice Williams", amount: 100 },
			],
		};
	}

	handleDonation = (donation) => {
		const { donations } = this.state;
		const newDonations = [...donations, donation];
		newDonations.sort((a, b) => b.amount - a.amount);
		this.setState({ donations: newDonations });
	};

	render() {
		const { donations } = this.state;
		return (
			<div className="container">
				<Header />
				<div className="main-container">
					<div className="main-block">
						<div className="main-text">
							<h1 className="main-heading">
								ДЛЯ НАС ЛУЧШЕ САМАЯ МАЛАЯ ПОМОЩЬ, ЧЕМ САМОЕ
								БОЛЬШОЕ СОЧУВСТВИЕ
							</h1>
							<h2 className="sub-heading">
								Наш фонд создан для того, чтобы помочь людям
								научиться слушать проблемы других людей и
								предоставить возможность оказать поддержку тем,
								кто нуждается в помощи
							</h2>
						</div>
						<MainForm onDonate={this.handleDonation} />
					</div>
				</div>
				<div className="main-container">
					<div className="main-block">
						<Leaderboard donations={donations} />
						<div className="main-text">
							<h1 className="main-heading">
								БЛАГОРОДСТВО В ДЕЙСТВИИ: ТОП-ЛИДЕРЫ ПО
								ПОЖЕРТВОВАНИЯМ
							</h1>
							<h2 className="sub-heading">
								Эти люди не останавливаются на достигнутом и
								используют свое благосостояние, чтобы помочь
								всем нуждающимся. Их пожертвования стали
								источником вдохновения и надежды для
								пострадавших жителей Украины.
							</h2>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
