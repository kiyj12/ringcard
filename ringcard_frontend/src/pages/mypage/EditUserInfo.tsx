import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/userBox.css";
import "../../styles/user/userIcon.css";
import "../../styles/editUserInfo.css";
import HeaderUser from "../../components/HeaderNoProfile";
import HeaderNoProfile from "../../components/HeaderNoProfile";

const EditUserInfo = () => {
	const [user, setUser] = useState<any>([]);
	useEffect(() => {
		axios
			.get("/mypage/info/edit")
			.then((res) => {
				setUser(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

  function BtnToEditPw(){
		function handleClick(e: any){
				window.location.href="/mypage/edit/password"
		}
			return(
				<button className="user-box-btn" onClick={handleClick}>변경</button>
			)
	}

	return (
		<div className="container">
			<HeaderNoProfile />
      <div className="userInfo-profile-container">
				<div>
					<img alt="" src="/profile.png" width="77px" color="white" />
				</div>
				<div className="profile-pic-large-name">{user.userRingcardName}</div>
			</div>

			<div>
            <div className="user-box">
				      <div className="user-box-in">
								<div className="user-text">이름</div>
								<input
									className="user-icon user-icon-user-light"
									defaultValue={user.userRingcardName}
									placeholder="이름을 입력해주세요"
								></input>
							</div>
							{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}

							<div className="user-box-in">
								<div className="user-text">아이디</div>
								<input
									className="user-icon user-icon-id-light"
									defaultValue={user.username}
									placeholder="아이디를 입력해주세요"
								></input>
							</div>

							<div className="user-box-in">
								<div className="user-text">비밀번호</div>
								<div className="user-box-div user-icon-dark">
									<input
										className="user-inner-transparent"
										defaultValue="●●●●●●●●●●"
										placeholder="●●●●●●●●●●"
										readOnly
									></input>
									{/* <button className="editUserInfo-input-pw-edit-button"><div className="editUserInfo-input-pw-edit-button-tag">변경</div></button>				 */}
									<BtnToEditPw/>
								</div>

								{/* <div className="email_div">
									E-mail
									<input type="text" name="email" className="email"/>
									<input type="submit" value="전송" className="btn"/>
								</div> */}
							</div>

						<div className="user-box-in">
							<div className="user-text">이메일</div>
							<input className="user-icon user-icon-email-light" defaultValue={user.userEmail} placeholder="이메일을 입력해주세요" ></input>
						</div>

						<div className="user-box-in">
							<button className="user-btn editUserInfo-btn">
							  <div className="user-btn-text">변경 사항 저장하기</div>
							</button>
						</div>
						</div>
					</div>
        </div>
	);
};

export default EditUserInfo;
