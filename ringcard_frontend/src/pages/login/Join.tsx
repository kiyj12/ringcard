import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/join.css";
import HeaderUser from "../../components/HeaderUser";
import HeaderRingca from "../../components/HeaderRingca";
import HeaderRingcaShort from "../../components/HeaderRingcaShort";


const Join = () => {
	
	// const [userList, setUserList] = useState<any[]>([]);

	// useEffect(() => {
	// 	axios
	// 		.get("/joinForm")
	// 		.then((res) => {
	// 			// console.log(res.data);
	// 			setUserList(res.data);			})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }, []);

	return (
		<div className="container">
			<HeaderRingcaShort/>
			<div className="input-box">

				<div className="input-box-in">
					<div className="input-tag">이름</div>
					<div className="input-box-div-light input-icon-user-light">
							<span className="input-icon-bar">|</span>
							<input className="input-inner-transparent"></input>
						</div>
				</div>
				{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}

				<div className="input-box-in">
					<div className="input-tag">아이디</div>
					<div className="input-box-div-light input-icon-id-light">
						<span className="input-icon-bar">|</span>
						<input className="input-inner-transparent"></input>
					</div>
				</div>

				<div className="input-box-in">
					<div className="input-tag">비밀번호</div>
					<div className="input-box-div-light input-icon-pw-light">
						<span className="input-icon-bar">|</span>
						<input className="input-inner-transparent"></input>
					</div>
				</div>

				<div className="input-box-in">
					<div className="input-tag">이메일</div>
					<div className="input-box-div-light input-icon-email-light">
						<span className="input-icon-bar">|</span>
						<input className="input-inner-transparent"></input>
					</div>
				</div>
			</div>

			<div className="input-box-in">
					<button className="input-btn join-button">
					<div className="input-btn-tag">회원가입</div>
					</button>
			</div>

			{/* <div className="join-delete-box">
				<div className="join-delete">
					<a className="join-delete-tag" href="/">링카 계정을 완전히 지우고 싶어요</a>
				</div>
			</div> */}
		</div>
	);
};

export default Join;