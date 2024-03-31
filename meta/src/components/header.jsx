import "./header.css";
import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<header>
				<div className="header-content">
					<nav className="header-nav">
						<ul>
							<li>
								<a href="#">О нас</a>
							</li>
							<li>
								<a href="#">Команда</a>
							</li>
							<li>
								<a href="#">Маркет</a>
							</li>
							<li>
								<a href="#">Контакты</a>
							</li>
						</ul>
					</nav>
					<div className="language-switch">
						<a href="#">ENG</a>
						<a href="#">КАЗ</a>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
