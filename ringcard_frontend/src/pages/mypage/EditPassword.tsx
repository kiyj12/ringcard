import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/editPassword.css";
import HeaderUser from "../../components/HeaderUser";


const EditPassword = () => {
	
	return (
		<div className="container">
			<HeaderUser></HeaderUser>
			<div>
				<div className="editPassword-box">
					<div className="editPassword-box-in">
						<div className="editPassword-tag">이름</div>
						<input className="editPassword-input-user"></input>
					</div>
					{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}
					<div className="editPassword-box-in">
						<div className="editPassword-tag">아이디</div>
						<input className="editPassword-input-id"></input>
					</div>
					<div className="editPassword-box-in">
						<div className="editPassword-tag">비밀번호</div>
						<input className="editPassword-input-pw"></input>
						<button className="editPassword-input-pw-edit-button"><div className="editPassword-input-pw-edit-button-tag">변경</div></button>
					</div>
					<div className="editPassword-box-in">
						<div className="editPassword-tag">이메일</div>
						<input className="editPassword-input-email"></input>
					</div>
					<div className="editPassword-box-in">
						<button className="editPassword-button">
						<div className="editPassword-button-tag">변경 사항 저장하기</div>
						</button>
					</div>
				</div>
			</div>
			{/* <div className="editPassword-delete-box">
				<div className="editPassword-delete">
					<a className="editPassword-delete-tag" href="/">링카 계정을 완전히 지우고 싶어요</a>
				</div>
			</div> */}
		</div>
	);
};

export default EditPassword;