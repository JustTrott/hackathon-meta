import "./background.css";
import React, { Component } from "react";

class Background extends Component {
	render() {
		return (
			<div className="ellipse-container">
				<svg
					id="el1"
					width="390"
					height="383"
					viewBox="0 0 390 383"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<ellipse
						cx="269.593"
						cy="104.41"
						rx="269.593"
						ry="104.41"
						transform="matrix(0.766044 -0.642788 -0.642788 -0.766044 32.798 444.478)"
						fill="#C4D8DD"
					/>
				</svg>
				<svg
					id="el2"
					width="385"
					height="525"
					viewBox="0 0 385 525"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<ellipse
						cx="249.733"
						cy="262.827"
						rx="216"
						ry="289.781"
						transform="rotate(-40 249.733 262.827)"
						fill="#F0EDA6"
						fill-opacity="0.6"
					/>
				</svg>
				<svg
					id="el3"
					width="146"
					height="326"
					viewBox="0 0 146 326"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<ellipse
						cx="156"
						cy="163.122"
						rx="136.487"
						ry="178.045"
						transform="rotate(-40 156 163.122)"
						fill="#F0EDA6"
						fill-opacity="0.6"
					/>
				</svg>
				<svg
					id="el4"
					width="104"
					height="187"
					viewBox="0 0 104 187"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<ellipse
						cx="135.544"
						cy="41.8361"
						rx="135.544"
						ry="41.8361"
						transform="matrix(0.766044 -0.642788 -0.642788 -0.766044 -81.2166 212.349)"
						fill="#C4D8DD"
					/>
				</svg>
			</div>
		);
	}
}

export default Background;
