import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/userBox.css";
import "../../styles/editPassword.css";
import HeaderNoProfile from "../../components/HeaderNoProfile";

const EditPassword = () => {
	const [user, setUser] = useState<any>([]);

	useEffect(() => {
		axios
			.get("/mypage/info")
			.then((res) => {
				setUser(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	function ButtonToUserInfoEdit(){
		function handleClick(e: any){
				window.location.href="/mypage/info/edit"
		}
			return(
				<button className="user-btn editPassword-btn-cancel" onClick={handleClick}>
					<div className="user-btn-text editPassword-btn-text-cancel">비밀번호 변경 취소하기</div>
				</button>
			)
	}
	
	return (
		<div className="container">
			<HeaderNoProfile />
			<div className="userInfo-profile-pic-container">
				<div>
					<img alt="" src="/profile.png" width="77px" color="white" />
				</div>
				<div className="profile-pic-larg-name">{user.userRingcardName}</div>
			</div>

			<div>
				<div className="user-box">

					<div className="user-box-in">
						<div className="user-text editPassword-text">현재 비밀번호</div>
						<input className="input editPassword-input" placeholder="현재 비밀번호"></input>
					</div>
					{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}

					<div className="user-box-in">
						<div className="user-text editPassword-text">새 비밀번호</div>
						<input className="input editPassword-input" placeholder="새 비밀번호"></input>
					</div>

					<div className="user-box-in">
						<div className="user-text editPassword-text">새 비밀번호 확인</div>
						<input className="input editPassword-input" placeholder="새 비밀번호 확인"></input>
					</div>

					<div className="user-box-in">
						<button className="user-btn editPassword-btn">
						<div className="user-btn-text">비밀번호 변경하기</div>
						</button>
					</div>

					<div className="user-box-in">
						<ButtonToUserInfoEdit/>
					</div>
				</div>
			</div>
			{/* 여기에 비밀번호 찾기?? */}
			{/* <div className="editPassword-delete-box">
				<div className="editPassword-delete">
					<a className="editPassword-delete-text" href="/">링카 계정을 완전히 지우고 싶어요</a>
				</div>
			</div> */}
		</div>
	);
};

export default EditPassword;
