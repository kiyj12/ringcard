import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/inputBox.css";
import "../../styles/user/inputIcon.css";
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
				<button value="변경" className="input-box-btn" onClick={handleClick}></button>
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
						<div className="input-box">
							
							<div className="input-box-in">
								<div className="input-tag">이름</div>
								<input className="input-icon input-icon-user-light" defaultValue={user.userRingcardName} placeholder="이름을 입력해주세요"></input>
							</div>
							{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}

							<div className="input-box-in">
								<div className="input-tag">아이디</div>
								<input className="input-icon input-icon-id-light" defaultValue={user.username} placeholder="아이디를 입력해주세요"></input>
							</div>

							<div className="input-box-in">
								<div className="input-tag">비밀번호</div>
								<div className="input-box-div-dark">
									<input className="input-inner-transparent" defaultValue="●●●●●●●●●●" placeholder="●●●●●●●●●●" readOnly></input>
									<BtnToEditPw/>
								</div>
						</div>

						<div className="input-box-in">
							<div className="input-tag">이메일</div>
							<input className="input-icon input-icon-email-light" defaultValue={user.userEmail} placeholder="이메일을 입력해주세요" ></input>
						</div>
						
						<div className="input-box-in">
							<button className="input-btn editUserInfo-button">
							<div className="input-btn-tag">변경 사항 저장하기</div>
							</button>
						</div>

					</div>
				</div>
			</div>
			
			{/* <div className="editUserInfo-delete-box">
				<div className="editUserInfo-delete">
					<a className="editUserInfo-delete-tag" href="/">링카 계정을 완전히 지우고 싶어요</a>
				</div>
			</div> */}
		</div>

	);
};

export default EditUserInfo;