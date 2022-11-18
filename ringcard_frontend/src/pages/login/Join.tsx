import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/userBox.css";
import "../../styles/user/userIcon.css";
import "../../styles/join.css";
import HeaderNoProfile from "../../components/HeaderNoProfile";
import HeaderRingca from "../../components/HeaderRingca";
import HeaderRingcaShort from "../../components/HeaderRingcaShort";


const Join = () => {
	
	const [userRingcardName, setUserRingcardName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [disabled, setDisabled] = useState(false);

	const handleChangeUserRingcardName = ({ target: { value } }:any) => setUserRingcardName(value);
	const handleChangeUsername = ({ target: { value } }:any) => setUsername(value);
	const handleChangePassword = ({ target: { value } }:any) => setPassword(value);
	const handleChangeUserEmail = ({ target: { value } }:any) => setUserEmail(value);

	// useEffect(() => {
	// 	axios
	// 		.post("/joinForm", {userRingcardName:"userRingcardName",username: "username", password:"password", userEmail: "userEmail"})
	// 		.then(function (res) {
  //           console.log(res);
  //       })
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }, []);

	// const handleSubmit = async (event:any) => {
	// 	axios
	// 		.post("/joinForm", {userRingcardName:"userRingcardName",username: "username", password:"password", userEmail: "userEmail"})
	// 		.then(function (res) {
  //           console.log(res);
  //       })
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
  // };
	// const handleSubmit =  async() => {
	// 	await axios
	// 		.post("/joinForm", null, {params:{userRingcardName:"userRingcardName",username: "username", password:"password", userEmail: "userEmail"}})
	// 		.then((res) =>{
  //           console.log(res);
  //       })
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
  // };

	const handleSubmit =  async() => {
		const api = axios.create
		const obj = {
			userRingcardName:{userRingcardName},
			username: {username}, password:{password}, userEmail: {userEmail}
		}
		await axios
			.post("/joinForm", {}, {params:obj})
			.then((res) =>{
            console.log(res);
        })
			.catch((err) => {
				console.log(err);
			});
  };

	// const handleSubmit =  async() => {
	// 	await axios
	// 		.post("/joinForm", null, {params:{userRingcardName:{userRingcardName},username: {username}, password:{password}, userEmail: {userEmail}}})
	// 		.then((res) =>{
  //           console.log(res);
  //       })
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
  // };
	

	return (
		<div className="container">
			<HeaderRingcaShort/>
			<form onSubmit={handleSubmit}>
			<div className="user-box">

				<div className="user-box-in">
					<div className="user-text">이름</div>
					<div className="user-box-div-light user-icon-user-light">
							<span className="user-icon-bar">|</span>
							<input className="user-inner-transparent" name="userRingcardName"
							value={userRingcardName}
							onChange={handleChangeUserRingcardName}></input>
						</div>
				</div>
				{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}

				<div className="user-box-in">
					<div className="user-text">아이디</div>
					<div className="user-box-div-light user-icon-id-light">
						<span className="user-icon-bar">|</span>
						<input className="user-inner-transparent"
						name="username"
						value={username}
						onChange={handleChangeUsername}></input>
					</div>
				</div>

				<div className="user-box-in">
					<div className="user-text">비밀번호</div>
					<div className="user-box-div-light user-icon-pw-light">
						<span className="user-icon-bar">|</span>
						<input className="user-inner-transparent"
						name="password"
						value={password}
						onChange={handleChangePassword}></input>
					</div>
				</div>

				<div className="user-box-in">
					<div className="user-text">이메일</div>
					<div className="user-box-div-light user-icon-email-light">
						<span className="user-icon-bar">|</span>
						<input className="user-inner-transparent"
						name="userEmail"
						// value={userEmail}
						onChange={handleChangeUserEmail}></input>
					</div>
				</div>
			</div>

			<div className="user-box-in">
					<button type="submit" className="user-btn join-btn" disabled={disabled}>
					<div className="user-btn-text">회원가입</div>
					</button>
			</div>

			{/* <div className="join-delete-box">
				<div className="join-delete">
					<a className="join-delete-text" href="/">링카 계정을 완전히 지우고 싶어요</a>
				</div>
			</div> */}
			</form>
		</div>
	);
};

export default Join;