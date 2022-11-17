import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/inputBox.css";
import "../../styles/user/inputIcon.css";
import "../../styles/login.css";
import HeaderUser from "../../components/HeaderUser";
import HeaderRingca from "../../components/HeaderRingca";


const Login = () => {


// 	function PasswordUpdate() {
//   return (
//     <form>
//       <input name="password" />
//       <button type="submit">비밀번호 변경</button>
//     </form>
//   );
// }

	const [password, setPassword] = useState("");

  const handleChange = ({ target: { value } }) => setPassword(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`변경된 패스워드: ${password}`);
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
							<input className="input-inner-transparent"></input>
						</div>
					</div>

					<form onSubmit={handleSubmit}>
						<input
							type="password"
							name="password"
							value={password}
							onChange={handleChange}
						/>
						<button type="submit">비밀번호 변경</button>
					</form>

					<div className="input-box-in">
						<button type="submit" className="input-btn">
							<div className="input-btn-tag">로그인</div>
						</button>
					</div>
				</div>

						</div>
			
				<div className="login-join-box">
					<BtnToJoin/>
				</div>
		</div>

	);
};

export default Login;