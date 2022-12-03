import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/userBox.css";
import "../../styles/user/userIcon.css";
import "../../styles/user/userHeader.css";
import "../../styles/layout/reactToast.css"
import "../../styles/login.css";
import HeaderNoProfile from "../../components/HeaderNoProfile";
import HeaderRingca from "../../components/HeaderRingca";
import { useForm } from "react-hook-form";
// import Toastify from "../../components/Toast";



const Login = () => {

// var Twitter = require('twitter');

// var client = new Twitter({
//   consumer_key: 'S0FVySANFNnlISMw5D1vSE8P0',
//   consumer_secret: 'KCu23eNrVftMqQeefWJTIei5Klju341e78BypImTVfw338Mm0X',
//   access_token_key: '1516353113430851586-BikPyEoaehv4mDqSnCLc5mMQGuigeR',
//   access_token_secret: 'zReOE8IWZ5wbGnPC4D8AClbBqc1hXhDQZcbBf2OOar2vw'
// });

// function tweetPost(content: string) {
//   client.post('statuses/update', {status: content}, function(error: any, tweet: any, response: any) {
//     if (!error) {
//       console.log("tweet success: " + content);
//     } else {
//       console.log(error);
//     }
//   });
// }
// dotenv.config();

// const app = express();

// const authClient = new auth.OAuth2User({
//   client_id: "OHZuVXNLOU9Yd2xEZTM1Q3pSTl86MTpjaQ",
//   client_secret: "R5LrpInanUZYCRH8l9aq5oUGBoxfAHNQTPjs8vhqB2zGjKI29m",
//   callback: "https://127.0.0.1:3000/callback",
//   scopes: ["tweet.read", "users.read", "offline.access"],
// });

// // const authClient = new auth.OAuth2User({
// //   client_id: process.env.CLIENT_ID as string,
// //   client_secret: process.env.CLIENT_SECRET as string,
// //   callback: "https://127.0.0.1:3000/callback",
// //   scopes: ["tweet.read", "users.read", "offline.access"],
// // });

// const client = new Client(authClient);

// const STATE = "my-state";

// app.get("/callback", async function (req, res) {
//   try {
//     const { code, state } = req.query;
//     if (state !== STATE) return res.status(500).send("State isn't matching");
//     await authClient.requestAccessToken(code as string);
//     res.redirect("/tweets");
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.get("/login", async function (req, res) {
//   const authUrl = authClient.generateAuthURL({
//     state: STATE,
//     code_challenge_method: "plain",
//     code_challenge: "test",
//   });
//   res.redirect(authUrl);
// });

// app.get("/tweets", async function (req, res) {
//   try {
//     const tweets = await client.tweets.findTweetById("20");
//     res.send(tweets);
//   } catch (error) {
//     console.log("tweets error", error);
//   }
// });

// app.get("/revoke", async function (req, res) {
//   try {
//     const response = await authClient.revokeAccessToken();
//     res.send(response);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.listen(3000, () => {
//   console.log(`Go here to login: http://127.0.0.1:3000/login`);
// });



	
// 	// toastify 알람 실행 함수 만들기
//   const notify = () => toast("질문의 답변이 등록되었습니다.", { 
// 		autoClose: 700,
// 		position:"top-center", 
// 		pauseOnFocusLoss: true,
// 		hideProgressBar: true,
// 		draggable: true, 
// 		pauseOnHover: true,
// 		theme: "dark",
// 		closeButton: false,
// 		transition: Zoom,
// 		// onOpen: () => window.alert('Called when I open'),
// 		// onClose: () => window.alert('Called when I close')
// })

	type ResponseList = {
		bindingResultHasErrors: boolean;
		overlappedUsername: boolean;
	}
	const [response, setResponse] = useState<ResponseList>({
		bindingResultHasErrors: false,
		overlappedUsername: false
	});
	// submitted==true여야 새로고침 되도록.
	const [submitted, setSubmitted] = useState(false);
	
	const onSubmit = async (data: any) => {
		await new Promise((r) => setTimeout(r, 100));

		// alert(JSON.stringify(data));
		console.log(data);

		await axios
			.post("/loginForm", data)
			.then((res) => {
				console.log("postHere");
				console.log(data);
				setResponse(res.data);
				console.log(res.data);
				setSubmitted(true);
			})
			.catch(function (error) {
				console.log(error.config);
			});
	};

	function RedirectAndInputErrors(){
		if(response.bindingResultHasErrors && response.overlappedUsername){
			return (<>
			<div className="user-text-error">bindingResultHasErrors</div>
			<div className="user-text-error">overlappedUsername</div>
			</>
			)
		}
		else if(response.bindingResultHasErrors){
			return <div className="user-text-error">bindingResultHasErrors</div>
		}
		else if(response.overlappedUsername){
			return <div className="user-text-error">overlappedUsername</div>
		}
		else if(submitted) {
			// 위 조건 만족할 때만 loginForm으로 새로고침
			window.location.href = "/loginForm"
			return (null);
		}
		return (null);
	}

	const {
		register,
		handleSubmit,
		formState: { isSubmitting, isDirty, errors },
	} = useForm();

	// PW toggle start.
	const [showPw, setShowPw] = useState<boolean>(false);
	const toggleShowPw =()=>{
	setShowPw(!showPw);
	}

	function handlePwClick(e: any){
    toggleShowPw()
  }

	function ShowPw(props: any) {
  return(
    <button value="변경" className="user-show-pw" onClick={handlePwClick}></button>
  	)
	}

	function HidePw(props: any) {
  return(
    <button value="변경" className="user-hide-pw" onClick={handlePwClick}></button>
  	)
	}
	// PW toggle fin.
	
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
	<form onSubmit={handleSubmit(onSubmit)}>
		<div className="container">
			<HeaderRingca/>
			{/* <ToastContainer/> */}
			<div className="user-box">
				<div className="user-box-in">
					<div className="user-text">아이디</div>
					<div className="user-box-div-light user-icon-user-light">
						<span className="user-icon-bar">|</span>		
						<input className="user-inner-transparent"
							{...register("username", {
							required: "답변이 입력되지 않았습니다.",
							})}></input>
					</div>
				</div>

				<div className="user-box-in">
					<div className="user-text">비밀번호</div>
					<div className="user-box-div user-icon-light">
						<span className="user-icon-bar">|</span>
						<input
						type={showPw ? "text" : "password"}
						className="user-inner-transparent"
						// placeholder="비밀번호를 입력해주세요"
						{...register("password", {
						required: "답변이 입력되지 않았습니다.",
						})}></input>
						{showPw ? (
						<ShowPw onClick={toggleShowPw} />
						) : (
						<HidePw onClick={toggleShowPw} />
						)}
					</div>
					<div className="user-text user-text-right">비밀번호를 잊으셨나요?
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

				<div className="user-box-in">
					<button type="submit" className="user-btn">
						<div className="user-btn-text">로그인</div>
					</button>
				</div>

				<div className="login-join-box">
					<BtnToJoin/>
					{/* <button onClick={notify}/> */}
					{/* <Toastify text="hello"/> */}
				</div>
			</div>
		</div>
	</form>
	);
};

export default Login;