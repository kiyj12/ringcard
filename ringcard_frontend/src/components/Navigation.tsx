import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = () => {
	//image를 import하는 대신 require(path)를 통해 변수에 저장해준다.

	// const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

	return (
		<nav className="nav-container">
			<div className="nav-bar">
				<div className="nav-tab">
					<div className="nav-unanswered">
						<Link
							to="/board"
							style={{ color: "inherit", textDecoration: "none" }}
						>
							<img alt="" src="/buttons/home-unanswered-tab-button.svg" />
							<div className="home-tab-text">미응답</div>
						</Link>
					</div>
					<div className="nav-answered">
						<Link
							to="/board"
							style={{ color: "inherit", textDecoration: "none" }}
						>
							<img alt="" src="/buttons/home-answered-tab-button.svg" />
							<div className="home-tab-text">응답됨</div>
						</Link>
					</div>
					<div className="nav-collection">
						<Link
							to="/board"
							style={{ color: "inherit", textDecoration: "none" }}
						>
							<img alt="" src="/buttons/home-collection-tab-button.svg" />
							<div className="home-tab-text">보관함</div>
						</Link>
					</div>
					<div className="nav-trashcan">
						<Link
							to="/board"
							style={{ color: "inherit", textDecoration: "none" }}
						>
							<img alt="" src="/buttons/home-trashcan-tab-button.svg" />
							<div className="home-tab-text">휴지통</div>
						</Link>
					</div>
				</div>
			</div>
			<hr />
			<div className="page-bar">
				<div className="page-section">
					<img alt="" src="/buttons/move-previous-page-btn.svg" />
					<div className="page-num">1 /17</div>
					<img alt="" src="/buttons/move-next-page-btn.svg" />
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
