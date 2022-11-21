import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/userBox.css";
import "../../styles/user/userIcon.css";
import "../../styles/login.css";
import HeaderNoProfile from "../../components/HeaderNoProfile";
import HeaderRingca from "../../components/HeaderRingca";


const Login = () => {


	const [password, setPassword] = useState("");
	const [disabled, setDisabled] = useState(false);

  const handleChange = ({ target: { value } }:any) => setPassword(value);

  const handleSubmit = async (event:any) => {
		setDisabled(true);
		event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    if (password.length < 8) {
      alert("8자의 이상의 비밀번호를 사용하셔야 합니다.");
    } else {
      alert(`변경된 패스워드: ${password}`);
    }
    setDisabled(false);
  };


	function BtnToJoin(){
		function handleClick(e: any){
				window.location.href="/joinForm"
		}
			return(
				<div className="login-join" onClick={handleClick}>
							<div className="login-join-text">아직 링카의 회원이 아니신가요?</div>
				</div>
			)
	}
	
	return (
		<div className="container">
			<HeaderRingca/>
			<form onSubmit={handleSubmit}>
			<div>
				<div className="user-box">
					<div className="user-box-in">
						<div className="user-text">아이디</div>
						<div className="user-box-div-light user-icon-id-light">
							<span className="user-icon-bar">|</span>
							<input className="user-inner-transparent"></input>
						</div>
					</div>

					<div className="user-box-in">
						<div className="user-text">비밀번호</div>
						<div className="user-box-div-light user-icon-pw-light">
							<span className="user-icon-bar">|</span>
							<input className="user-inner-transparent"
							name="password"
							value={password}
							onChange={handleChange}></input>
						</div>
						<div className="user-text user-text-right">비밀번호를 잊으셨나요?</div>
					</div>

					{/* <form onSubmit={handleSubmit}>
						<input
							type="password"
							name="password"
							value={password}
							onChange={handleChange}
						/>
						<button type="submit">비밀번호 변경</button>
					</form> */}

					<div className="user-box-in">
						<button type="submit" disabled={disabled} className="user-btn">
							<div className="user-btn-text">로그인</div>
						</button>
					</div>
				</div>

						</div>
			
				<div className="login-join-box">
					<BtnToJoin/>
				</div>
		</form>
		</div>

	);
};

export default Login;