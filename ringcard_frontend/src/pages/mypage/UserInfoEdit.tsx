import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/userInfoEdit.css";
import HeaderUser from "../../components/HeaderUser";


const UserInfoEdit = () => {
	
	const [userList, setUserList] = useState<any[]>([]);


	useEffect(() => {
		axios
			.get("/mypage/info")
			.then((res) => {
				// console.log(res.data);
				setUserList(res.data);			})
			.catch((err) => {
				console.log(err);
			});
	}, []);


	
	return (
		<div className="container">
			<HeaderUser></HeaderUser>
			<div>
				{userList.map((user, idx) => (
					<div key={idx}>
						<div className="userInfoEdit-box">
				<div className="userInfoEdit-box-in">
					<div className="userInfoEdit-tag">이름</div>
					<input className="userInfoEdit-input-user" defaultValue={user.userRingcardName} placeholder="이름을 입력해주세요"></input>
				</div>
				{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}
				<div className="userInfoEdit-box-in">
					<div className="userInfoEdit-tag">아이디</div>
					<input className="userInfoEdit-input-id" defaultValue={user.username} placeholder="아이디를 입력해주세요"></input>
				</div>
				<div className="userInfoEdit-box-in">
					<div className="userInfoEdit-tag">비밀번호</div>
					<input className="userInfoEdit-input-pw" defaultValue="*****" placeholder="*****" readOnly></input>
					<button className="userInfoEdit-input-pw-edit-button"><div className="userInfoEdit-input-pw-edit-button-tag">변경</div></button>
	
				</div>

				<div className="userInfoEdit-box-in">
					<div className="userInfoEdit-tag">이메일</div>
					<input className="userInfoEdit-input-email" defaultValue={user.userEmail} placeholder="이메일을 입력해주세요" ></input>
				</div>
				<div className="userInfoEdit-box-in">
					<button className="userInfoEdit-button">
					<div className="userInfoEdit-button-tag">변경 사항 저장하기</div>
					</button>
				</div>
			</div>
					</div>
				))}
			</div>
			
			{/* <div className="userInfoEdit-delete-box">
				<div className="userInfoEdit-delete">
					<a className="userInfoEdit-delete-tag" href="/">링카 계정을 완전히 지우고 싶어요</a>
				</div>
			</div> */}
		</div>

	);
};

export default UserInfoEdit;