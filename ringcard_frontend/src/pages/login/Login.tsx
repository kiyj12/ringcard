import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
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

	
	return (
		<div className="container">
			<HeaderRingca/>
			<div>
						<div className="login-box">
							<div className="login-box-in">
								<div className="login-tag">아이디</div>
								<div className="login-input-bar-box">
									<span className="login-input-bar">|</span>
								</div>
								<input className="login-input-id"></input>
							</div>
							<div className="login-box-in">
								<div className="login-tag">비밀번호</div>
								<div className="login-input-bar-box">
									<span className="login-input-bar">|</span>
								</div>
								<input className="login-input-pw"></input>
								<div className="login-pw-find-tag">비밀번호를 잊으셨나요?</div>
							</div>

							<div className="login-box-in">
								<button className="login-button">
									<div className="login-button-tag">로그인</div>
								</button>
							</div>
						</div>

						</div>
			
				<div className="login-join-box">
					<div className="login-join">
						<a className="login-join-tag" href="/joinForm">아직 링카의 회원이 아니신가요?</a>
					</div>
				</div>
		</div>

	);
};

export default Login;