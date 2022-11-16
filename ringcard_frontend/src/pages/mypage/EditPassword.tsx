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
						<div className="editPassword-tag">현재 비밀번호</div>
						<input className="editPassword-input-pw" placeholder="현재 비밀번호"></input>
					</div>
					{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}
					<div className="editPassword-box-in">
						<div className="editPassword-tag">새 비밀번호</div>
						<input className="editPassword-input-pw-new" placeholder="새 비밀번호"></input>
					</div>
					<div className="editPassword-box-in">
						<div className="editPassword-tag">새 비밀번호 확인</div>
						<input className="editPassword-input-pw-new-confirm" placeholder="새 비밀번호 확인"></input>
					</div>
					<div className="edistPassword-box-in">
						<button className="editPassword-button">
						<div className="editPassword-button-tag">비밀번호 변경하기</div>
						</button>
					</div>
					<div className="editPassword-box-in">
						<button className="editPassword-button-cancel">
						<div className="editPassword-button-tag-cancel">비밀번호 변경 취소하기</div>
						</button>
					</div>
				</div>
			</div>
			{/* 여기에 비밀번호 찾기?? */}
			{/* <div className="editPassword-delete-box">
				<div className="editPassword-delete">
					<a className="editPassword-delete-tag" href="/">링카 계정을 완전히 지우고 싶어요</a>
				</div>
			</div> */}
		</div>
	);
};

export default EditPassword;