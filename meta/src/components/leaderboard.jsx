import React from "react";
import "./leaderboard.css";

const Leaderboard = ({ donations }) => {
	return (
		<div className="leaderboard">
			<div className="leaderboard-row heading-row">
				<div className="leaderboard-cell badge-cell"></div>
				<div className="leaderboard-cell name-cell">
					Имя пользователя
				</div>
				<div className="leaderboard-cell">Сумма пожертвований</div>
			</div>
			{donations.slice(0, 9).map((donation, index) => (
				<div className="leaderboard-row" key={donation.id}>
					<div className="leaderboard-cell badge-cell">
						{index === 0 && <div className="badge gold"></div>}
						{index === 1 && <div className="badge silver"></div>}
						{index === 2 && <div className="badge bronze"></div>}
					</div>
					<div className="leaderboard-cell name-cell">
						{donation.name}
					</div>
					<div className="leaderboard-cell">{donation.amount} ₸</div>
				</div>
			))}
		</div>
	);
};

export default Leaderboard;
