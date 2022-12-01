import axios from "axios";
import { useState } from "react";
import "../styles/layout/header.css";
import Modal from "../components/Modal";

function Header() {
	const handleHomeBtnClick = async () => {
		window.location.href = "/home/unanswered/0";
	};

	// 모달창 노출 여부 state
	const [showReq, setShowReq] = useState<boolean>(false);

	function openReq() {
		setShowReq(!showReq);
	}

	function closeReq() {
		setShowReq(!showReq);
	}
	return (
		<header className="header">
			<div className="header-blank"></div>

			<div className="top-banner">
				<div className="home-btn" onClick={handleHomeBtnClick}>
					<img src="/buttons/home-icon.svg" width="21px" color="white" alt="" />
				</div>

				<div className="profile-pic">
					<img src="/profile.png" width="35px" color="white" alt="" />
				</div>
				<div className="menu-btn" onClick={openReq}>
					<img src="/buttons/menu-icon.svg" width="21px" color="white" alt="" />
					<Modal open={showReq} close={closeReq} />
				</div>
			</div>
		</header>
	);
}

export default Header;
