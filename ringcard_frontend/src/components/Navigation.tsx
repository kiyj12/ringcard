import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = () => {
	// const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

	return (
		<nav className="nav-container">
			<div className="nav-bar">
				<div className="nav-tab">
					<div className="nav-unanswered">
						<NavLink
							to="/home/unanswered"
							style={{ textDecoration: "none" }}
							className={({ isActive }) =>
								isActive ? "activeNav" : "inactiveNav"
							}
						>
							{({ isActive }) =>
								isActive ? (
									<React.Fragment>
										<img
											alt=""
											src="/buttons/home-unanswered-tab-active-button.svg"
										/>
										<div className="home-tab-text">미응답</div>
									</React.Fragment>
								) : (
									<React.Fragment>
										<img alt="" src="/buttons/home-unanswered-tab-button.svg" />
										<div className="home-tab-text">미응답</div>
									</React.Fragment>
								)
							}
						</NavLink>
					</div>
					<div className="nav-answered">
						<NavLink
							to="/home/answered"
							style={{ textDecoration: "none" }}
							className={({ isActive }) =>
								isActive ? "activeNav" : "inactiveNav"
							}
						>
							{({ isActive }) =>
								isActive ? (
									<React.Fragment>
										<img
											alt=""
											src="/buttons/home-answered-tab-active-button.svg"
										/>
										<div className="home-tab-text">응답됨</div>
									</React.Fragment>
								) : (
									<React.Fragment>
										<img alt="" src="/buttons/home-answered-tab-button.svg" />
										<div className="home-tab-text">응답됨</div>
									</React.Fragment>
								)
							}
						</NavLink>
					</div>
					<div className="nav-collection">
						<NavLink
							to="/home/collection"
							style={{ textDecoration: "none" }}
							className={({ isActive }) =>
								isActive ? "activeNav" : "inactiveNav"
							}
						>
							{({ isActive }) =>
								isActive ? (
									<React.Fragment>
										<img
											alt=""
											src="/buttons/home-collection-tab-active-button.svg"
										/>
										<div className="home-tab-text">보관함</div>
									</React.Fragment>
								) : (
									<React.Fragment>
										<img alt="" src="/buttons/home-collection-tab-button.svg" />
										<div className="home-tab-text">보관함</div>
									</React.Fragment>
								)
							}
						</NavLink>
					</div>
					<div className="nav-trashcan">
						<NavLink
							to="/home/trashcan"
							style={{ textDecoration: "none" }}
							className={({ isActive }) =>
								isActive ? "activeNav" : "inactiveNav"
							}
						>
							{({ isActive }) =>
								isActive ? (
									<React.Fragment>
										<img
											alt=""
											src="/buttons/home-trashcan-tab-active-button.svg"
										/>
										<div className="home-tab-text">휴지통</div>
									</React.Fragment>
								) : (
									<React.Fragment>
										<img alt="" src="/buttons/home-trashcan-tab-button.svg" />
										<div className="home-tab-text">휴지통</div>
									</React.Fragment>
								)
							}
						</NavLink>
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
