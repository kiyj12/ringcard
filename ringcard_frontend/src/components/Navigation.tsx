import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = (props: any) => {
	// const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
	const totalPages=props.totalPages;
	const pageNumber=props.pageNumber;
	const page = props.page;
	const pageAddress = props.pageAddress;

	function BtnToPageUp(){
		function handleClick(e: any){
			const pageNumber = Number(page);
			const newPage = pageNumber + 1;
			if (totalPages === undefined){}
			else if (newPage>=totalPages){
			}else{
				window.location.href=`/home/${pageAddress}/${newPage}`
			}
		}
		return (<button className="page-btn" onClick={handleClick}>
			<img alt="" src="/buttons/move-next-page-btn.svg" />
		</button>);
	}

	function BtnToPageDown(){
		function handleClick(e: any){
			const pageNumber = Number(page);
			const newPage = pageNumber - 1;
			if (newPage<0){
			}else{
				window.location.href=`/home/${pageAddress}/${newPage}`
			}
		}
		return (<button className="page-btn" onClick={handleClick}>
			<img alt="" src="/buttons/move-previous-page-btn.svg" />
		</button>);
	}


	return (
		<nav className="nav-container">
			<div className="nav-bar">
				<div className="nav-tab">
					<div className="nav-unanswered">
						<NavLink
							to="/home/unanswered/0"
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
							to="/home/answered/0"
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
							to="/home/collection/0"
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
							to="/home/trashcan/0"
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
			<hr className="nav-hr"/>
			<div className="page-bar">
				<div className="page-section">
					<BtnToPageDown/>
					<div className="page-num-section">
						<div className="page-num-current">{pageNumber}</div>
						<div className="page-num">/ {totalPages}</div>
					</div>
					<BtnToPageUp/>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
