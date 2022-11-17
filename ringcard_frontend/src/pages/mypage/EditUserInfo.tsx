import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/userBox.css";
import "../../styles/user/userIcon.css";
import "../../styles/editUserInfo.css";
import HeaderNoProfile from "../../components/HeaderNoProfile";


const EditUserInfo = () => {
	
	const [user, setUser] = useState<any>([]);

	useEffect(() => {
		axios
			.get("/mypage/info")
			.then((res) => {
				// console.log(res.data);
				setUser(res.data);			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	function BtnToEditPw(){
		function handleClick(e: any){
				window.location.href="/mypage/edit/password"
		}
			return(
				<button value="변경" className="user-box-btn" onClick={handleClick}></button>
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
					<div>
						<div className="user-box">
							
							<div className="user-box-in">
								<div className="user-text">이름</div>
								<input className="user-icon user-icon-user-light" defaultValue={user.userRingcardName} placeholder="이름을 입력해주세요"></input>
							</div>
							{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}

							<div className="user-box-in">
								<div className="user-text">아이디</div>
								<input className="user-icon user-icon-id-light" defaultValue={user.username} placeholder="아이디를 입력해주세요"></input>
							</div>

							<div className="user-box-in">
								<div className="user-text">비밀번호</div>
								<div className="user-box-div-dark">
									<input className="user-inner-transparent" defaultValue="●●●●●●●●●●" placeholder="●●●●●●●●●●" readOnly></input>
									<BtnToEditPw/>
								</div>
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
			
			{/* <div className="editUserInfo-delete-box">
				<div className="editUserInfo-delete">
					<a className="editUserInfo-delete-text" href="/">링카 계정을 완전히 지우고 싶어요</a>
				</div>
			</div> */}
		</div>

	);
};

export default EditUserInfo;