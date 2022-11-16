import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/userInfo.css";
import HeaderUser from "../../components/HeaderUser";


const UserInfo = () => {
	
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

	function ButtonToUserInfoEdit(){
	function handleClick(e: any){
			window.location.href="/mypage/info/edit"
	}
		return(
		<button className="userInfo-button" onClick={handleClick}>
					<div className="userInfo-button-tag">프로필 변경하기</div>
					</button>
		)
	}
	

	return (
		<div className="container">
			<HeaderUser></HeaderUser>
			<div>
				{userList.map((user, idx) => (
					<div key={idx}>
						<div className="userInfo-box">
				<div className="userInfo-box-in">
					<div className="userInfo-tag">이름</div>
					<input className="userInfo-input-user" defaultValue={user.userRingcardName} placeholder="이름을 입력해주세요" readOnly></input>
				</div>
				{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}
				<div className="userInfo-box-in">
					<div className="userInfo-tag">아이디</div>
					<input className="userInfo-input-id" defaultValue={user.username} placeholder="아이디를 입력해주세요" readOnly></input>
				</div>
				<div className="userInfo-box-in">
					<div className="userInfo-tag">비밀번호</div>
					<input className="userInfo-input-pw" defaultValue="●●●●●●●●●●" placeholder="*****" readOnly></input>
				</div>
				<div className="userInfo-box-in">
					<div className="userInfo-tag">이메일</div>
					<input className="userInfo-input-email" defaultValue={user.userEmail} placeholder="이메일을 입력해주세요" readOnly></input>
				</div>
				<div className="userInfo-box-in">
					<ButtonToUserInfoEdit/>
				</div>
			</div>
					</div>
				))}
			</div>
			
			<div className="userInfo-delete-box">
				<div className="userInfo-delete">
					<a className="userInfo-delete-tag" href="/mypage/info/edit">링카 계정을 완전히 지우고 싶어요</a>
				</div>
			</div>

		</div>
	);
};

export default UserInfo;