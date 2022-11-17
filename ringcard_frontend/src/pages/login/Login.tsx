import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/inputBox.css";
import "../../styles/user/inputIcon.css";
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
							<div className="login-join-tag">아직 링카의 회원이 아니신가요?</div>
				</div>
			)
	}
	
	return (
		<div className="container">
			<HeaderRingca/>
			<form onSubmit={handleSubmit}>
			<div>
				<div className="input-box">
					<div className="input-box-in">
						<div className="input-tag">아이디</div>
						<div className="input-box-div-light input-icon-id-light">
							<span className="input-icon-bar">|</span>
							<input className="input-inner-transparent"></input>
						</div>
					</div>

					<div className="input-box-in">
						<div className="input-tag">비밀번호</div>
						<div className="input-box-div-light input-icon-pw-light">
							<span className="input-icon-bar">|</span>
							<input className="input-inner-transparent" type="password"
							name="password"
							value={password}
							onChange={handleChange}></input>
						</div>
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

					<div className="input-box-in">
						<button type="submit" disabled={disabled} className="input-btn">
							<div className="input-btn-tag">로그인</div>
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