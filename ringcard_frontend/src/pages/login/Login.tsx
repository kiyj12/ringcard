import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/login.css";
import HeaderUser from "../../components/HeaderUser";
import HeaderRingca from "../../components/HeaderRingca";


const Login = () => {
	
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
				{userList.map((user, idx) => (
					<div key={idx}>
						<div className="login-box">
							<div className="login-box-in">
								<div className="login-tag">아이디</div>
								<input className="login-input-id"></input>
							</div>
							<div className="login-box-in">
								<div className="login-tag">비밀번호</div>
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
							))}
						</div>
			
				<div className="login-join-box">
					<div className="login-join">
						<a className="login-join-tag" href="/">아직 링카의 회원이 아니신가요?</a>
					</div>
				</div>
		</div>

	);
};

export default Login;