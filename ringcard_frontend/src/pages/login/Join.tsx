import React, { useState, useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/userBox.css";
import "../../styles/user/userIcon.css";
import "../../styles/join.css";
import HeaderRingcaShort from "../../components/HeaderRingcaShort";
import userEvent from "@testing-library/user-event";


const Join = () => {

	// const [, forceUpdate] = useReducer((x) => x + 1, 0);

	// function ForceUpdate(){
	// 	forceUpdate();
	// 	return <></>
	// }
	type ResponseList = {
		bindingResultHasErrors: boolean;
		overlappedUsername: boolean;
	}
	const [response, setResponse] = useState<ResponseList>({
		bindingResultHasErrors: false,
		overlappedUsername: false
	});
	const [bindingResultHasErrors, setBindingResultHasErrors] = useState(false);
	const [overlappedUsername, setOverlappedUsername] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const onSubmit = async (data: any) => {
		await new Promise((r) => setTimeout(r, 100));

		// alert(JSON.stringify(data));
		console.log(data);

		await axios
			.post("/joinForm", data)
			.then((res) => {
				console.log("postHere");
				console.log(data);
        // window.location.href = "/loginForm";
				setResponse(res.data);
				console.log(res.data);
				setBindingResultHasErrors(response.bindingResultHasErrors);
				setOverlappedUsername(response.overlappedUsername);
				// if (response.bindingResultHasErrors===false && response.overlappedUsername===false) {
				// 	window.location.href = "/loginForm";
				// }
				setSubmitted(true);
			})
			.catch(function (error) {
				console.log(error.config);
			});
	};

	function RedirectAndInputErrors(){
		if(submitted === true && response.bindingResultHasErrors===false && response.overlappedUsername===false) {
			// 위 조건 만족할 때만 loginForm으로 새로고침
			window.location.href = "/loginForm"
			return (null);
		}
		else if(response.bindingResultHasErrors){
			return <div className="user-text">bindingResultHasErrors</div>
		}
		else if(response.overlappedUsername){
			return <div className="user-text">overlappedUsername</div>
		}
		return (null);
	}

	const {
		register,
		handleSubmit,
		formState: { isSubmitting, isDirty, errors },
	} = useForm();

	return (
	<form onSubmit={handleSubmit(onSubmit)}>
		{/* {
					submitted === true && response.bindingResultHasErrors===false && response.overlappedUsername===false
					? window.location.href = "/loginForm"
					: null
				} */}
		<div className="container">
			<HeaderRingcaShort/>
			<div className="user-box">
				<div className="user-box-in">
					<div className="user-text">이름</div>
					<div className="user-box-div-light user-icon-user-light">
						<span className="user-icon-bar">|</span>		
						<input className="user-inner-transparent"
							{...register("userRingcardName", {
							required: "답변이 입력되지 않았습니다.",
							})}></input>
					</div>
				</div>
				{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}
				{/* {
        		disabled === true
        		? <Navigate to = "/loginForm" />
        		: null
					} */}

				<div className="user-box-in">
					<div className="user-text">아이디</div>
					<div className="user-box-div-light user-icon-id-light">
						<span className="user-icon-bar">|</span>
						<input className="user-inner-transparent"
							{...register("username", {
							required: "답변이 입력되지 않았습니다.",
							})}></input>
					</div>
				</div>

				<div className="user-box-in">
					<div className="user-text">비밀번호</div>
					<div className="user-box-div-light user-icon-pw-light">
						<span className="user-icon-bar">|</span>
						<input className="user-inner-transparent"
							{...register("password", {
							required: "답변이 입력되지 않았습니다.",
							})}></input>
					</div>
				</div>

				<div className="user-box-in">
					<div className="user-text">이메일</div>
					<div className="user-box-div-light user-icon-email-light">
						<span className="user-icon-bar">|</span>
						<input className="user-inner-transparent"
							{...register("userEmail", {
							required: "답변이 입력되지 않았습니다.",
							})}></input>
					</div>
				</div>
			</div>

			<div className="user-box-in">
				<RedirectAndInputErrors/>

				{/* {
					bindingResultHasErrors
					? <div className="user-text">bindingResultHasErrors</div>
					: null
				}
				{
					overlappedUsername
					? <div className="user-text">overlappedUsername</div>
					: null
				}
				 */}
				<button type="submit" className="user-btn join-btn">
					<div className="user-btn-text">회원가입</div>
				</button>
			</div>


			{/* <div className="join-delete-box">
				<div className="join-delete">
					<a className="join-delete-text" href="/">링카 계정을 완전히 지우고 싶어요</a>
				</div>
			</div> */}
		</div>
	</form>
	);
};

export default Join;