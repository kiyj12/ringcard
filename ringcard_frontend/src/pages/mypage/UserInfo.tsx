import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/inputBox.css";
import "../../styles/user/inputIcon.css";
import "../../styles/userInfo.css";
import HeaderNoProfile from "../../components/HeaderNoProfile";

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
			<button className="input-btn userInfo-button" onClick={handleClick}>
				<div className="input-btn-tag">프로필 변경하기</div>
			</button>
		);
	}

	return (
		<div className="container">
			<HeaderNoProfile></HeaderNoProfile>
			<div>
				<div>
					<div className="input-box">
						<div className="input-box-in">
							<div className="input-tag">이름</div>
							<input
								className="input-icon input-icon-user-dark"
								defaultValue={user.userRingcardName}
								placeholder="이름을 입력해주세요"
								readOnly
							></input>
						</div>
						{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}

						<div className="input-box-in">
							<div className="input-tag">아이디</div>
							<input
								className="input-icon input-icon-id-dark"
								defaultValue={user.username}
								placeholder="아이디를 입력해주세요"
								readOnly
							></input>
						</div>

						<div className="input-box-in">
							<div className="input-tag">비밀번호</div>
							<input
								className="input-icon input-icon-pw-dark"
								defaultValue="●●●●●●●●●●"
								placeholder="*****"
								readOnly
							></input>
						</div>

						<div className="input-box-in">
							<div className="input-tag">이메일</div>
							<input
								className="input-icon input-icon-email-dark"
								defaultValue={user.userEmail}
								placeholder="이메일을 입력해주세요"
								readOnly
							></input>
						</div>

						<div className="input-box-in">
							<ButtonToUserInfoEdit />
						</div>
					</div>
				</div>
			</div>

			<div className="userInfo-delete-box">
				<div className="userInfo-delete">
					<a className="userInfo-delete-tag" href="/mypage/delete/account">
						링카 계정을 완전히 지우고 싶어요
					</a>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
