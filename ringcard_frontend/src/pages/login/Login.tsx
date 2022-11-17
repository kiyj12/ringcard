import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/inputBox.css";
import "../../styles/user/inputIcon.css";
import "../../styles/login.css";
import HeaderUser from "../../components/HeaderNoProfile";
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

	function BtnToJoin() {
		function handleClick(e: any) {
			window.location.href = "/joinForm";
		}
		return (
			<div className="login-join" onClick={handleClick}>
				<div className="login-join-tag">아직 링카의 회원이 아니신가요?</div>
			</div>
		);
	}

	return (
		<div className="container">
			<HeaderRingca />
			<div>
				<div className="input-box">
					<div className="input-box-in">
						<div className="input-tag">아이디</div>
						<div className="input-bar-box">
							<span className="input-bar">|</span>
						</div>
						<input className="input-icon input-icon-id-light"></input>
					</div>

					<div className="input-box-in">
						<div className="input-tag">비밀번호</div>
						<div className="input-bar-box">
							<span className="input-bar">|</span>
						</div>
						<input className="input-icon input-icon-pw-light"></input>
						<div className="login-pw-find-tag">비밀번호를 잊으셨나요?</div>
					</div>

					<div className="input-box-in">
						<button className="login-button">
							<div className="login-button-tag">로그인</div>
						</button>
					</div>
				</div>
			</div>

			<div className="login-join-box">
				<BtnToJoin />
			</div>
		</div>
	);
};

export default Login;
