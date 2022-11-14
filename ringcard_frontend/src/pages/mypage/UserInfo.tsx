import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/userInfo.css";
import Header from "../../components/Header";
import { UserInfoDto } from "./UserInfoDto";
import { ThemeProvider } from "react-bootstrap";

const UserInfo = () => {
	
	const [user, setUser] = useState<UserInfoDto>();

	useEffect(() => {
		axios
			.get("/mypage/info/edit")
			.then((res) => {
				console.log(res.data);
				setUser(res.data);			})
			.catch((err) => {
				console.log(err);
			});
	}, []);


	// input을 component로.

	return (
		<div className="container">
			<Header></Header>
			<div className="name">이름</div>
			<input className="hellos" defaultValue={user!.userRingcardName} placeholder="이름을 입력해주세요"></input>
			{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}
			{/*<div>아이디</div>
			<div>{user!.username}</div>
			<div>비밀번호</div>
			<div>*****</div>
			<div>이메일</div>
			<div>{user!.userEmail}</div>
			<button>프로필 변경하기</button>
			<p><a href="/">링카 계정을 완전히 지우고 싶어요</a></p> */}
		</div>
	);
};

export default UserInfo;


// //이걸로 임시로. 위에 코드 처럼 userList 대신 바로 user 해서 사용하자.
// const UserInfo = () => {
// 	const [userList, setUserList] = useState<any[]>([]);

// 	// const getData = async () => {
// 	// 	await axios
// 	// 		.get("/home/unanswered")
// 	// 		.then((res) => {
// 	// 			console.log(res.data);

// 	//       const questions = res.data;
// 	// 		})
// 	// 		.catch((err) => {
// 	// 			console.log(err);
// 	// 		});
// 	// };

// 	useEffect(() => {
// 		axios
// 			.get("/mypage/info")
// 			.then((res) => {
// 				console.log(res.data);
// 				setUserList(res.data);			
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	}, []);

// 	return (
// 		<div className="container">
// 			<Header></Header>
// 			{userList.map((user, idx) => (
// 				<div key={idx}>
// 					<h2>{user.username}</h2>
// 				</div>
// 			))}
			
// 		</div>
// 	);
// };

// export default UserInfo;
