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
import Toastify from "../../components/Toast";




const Login = () => {

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
					<Toastify text="hello"/>
				</div>
			</div>
		</div>
	</form>
	);
};

export default Login;