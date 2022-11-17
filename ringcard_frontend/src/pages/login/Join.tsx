import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/userBox.css";
import "../../styles/user/userIcon.css";
import "../../styles/join.css";
import HeaderNoProfile from "../../components/HeaderNoProfile";
import HeaderRingca from "../../components/HeaderRingca";
import HeaderRingcaShort from "../../components/HeaderRingcaShort";


const Join = () => {
	
	// const [userList, setUserList] = useState<any[]>([]);

	useEffect(() => {
		axios
			.post("/joinForm", {username: "username", password:"password", userEmail: "userEmail", userRingcardName:"userRingcardName"})
			.then(function (res) {
            console.log(res);
        })
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="container">
			<HeaderRingcaShort/>
			<div className="user-box">

				<div className="user-box-in">
					<div className="user-text">이름</div>
					<div className="user-box-div-light user-icon-user-light">
							<span className="user-icon-bar">|</span>
							<input className="user-inner-transparent" type="" name=""></input>
						</div>
				</div>
				{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}

				<div className="user-box-in">
					<div className="user-text">아이디</div>
					<div className="user-box-div-light user-icon-id-light">
						<span className="user-icon-bar">|</span>
						<input className="user-inner-transparent"></input>
					</div>
				</div>

				<div className="user-box-in">
					<div className="user-text">비밀번호</div>
					<div className="user-box-div-light user-icon-pw-light">
						<span className="user-icon-bar">|</span>
						<input className="user-inner-transparent"></input>
					</div>
				</div>

				<div className="user-box-in">
					<div className="user-text">이메일</div>
					<div className="user-box-div-light user-icon-email-light">
						<span className="user-icon-bar">|</span>
						<input className="user-inner-transparent"></input>
					</div>
				</div>
			</div>

			<div className="user-box-in">
					<button className="user-btn join-btn">
					<div className="user-btn-text">회원가입</div>
					</button>
			</div>

			{/* <div className="join-delete-box">
				<div className="join-delete">
					<a className="join-delete-text" href="/">링카 계정을 완전히 지우고 싶어요</a>
				</div>
			</div> */}
		</div>
	);
};

export default Join;