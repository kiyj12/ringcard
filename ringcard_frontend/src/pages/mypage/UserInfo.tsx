import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/headerNoProfile.css";
import "../../styles/user/userHeader.css";
import "../../styles/user/userBox.css";
import "../../styles/user/userIcon.css";
import "../../styles/userInfo.css";
import HeaderNoProfile from "../../components/HeaderNoProfile";
import UserProfile from "../../components/UserProfile";

const UserInfo = () => {
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
	function ButtonToUserInfoEdit() {
		function handleClick(e: any) {
			window.location.href = "/mypage/info/edit";
		}
		return (
			<button className="user-btn userInfo-btn" onClick={handleClick}>
				<div className="user-btn-text">프로필 변경하기</div>
			</button>
		);
	}

	return (
		<div className="container">
			<HeaderNoProfile />
      <div className="userInfo-profile-container">
				<UserProfile/>
				<div className="user-profile-name">{user.userRingcardName}</div>
			</div>
			<div>
				<div className="user-box">
					<div className="user-box-in">
						<div className="user-text">이름</div>
						<input
							className="user-icon user-icon-user-dark"
							placeholder={user.userRingcardName}
							readOnly
						></input>
					</div>
					{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}

					<div className="user-box-in">
						<div className="user-text">아이디</div>
						<input
							className="user-icon user-icon-id-dark"
							placeholder={user.username}
							readOnly
						></input>
					</div>

					<div className="user-box-in">
						<div className="user-text">비밀번호</div>
						<input
							className="user-icon user-icon-pw-dark"
							placeholder="●●●●●●●●●●"
							readOnly
						></input>
					</div>

					<div className="user-box-in">
						<div className="user-text">이메일</div>
						<input
							className="user-icon user-icon-email-dark"
							placeholder={user.userEmail}
							readOnly
						></input>
					</div>

					<div className="user-box-in">
						<ButtonToUserInfoEdit />
					</div>
				</div>
				</div>

			<div className="userInfo-delete-box">
				<div className="userInfo-delete">
					<a className="userInfo-delete-text" href="/mypage/delete/account">
						링카 계정을 완전히 지우고 싶어요
					</a>
				</div>
			</div>
		</div>

	);
};

export default UserInfo;