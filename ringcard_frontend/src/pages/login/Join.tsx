import React, { useState, useEffect } from "react";
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
				// 이거 뜨면 새로고침 안가도록.
				setBindingResultHasErrors(response.bindingResultHasErrors);
				setOverlappedUsername(response.overlappedUsername);
				// 여기서 둘 다 false 여야만 새로고침 되게.
			})
			.catch(function (error) {
				if (error.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js
					console.log(error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log("Error", error.message);
				}
				console.log(error.config);
			});
	};


	const {
		register,
		handleSubmit,
		formState: { isSubmitting, isDirty, errors },
	} = useForm();

	return (
	<form onSubmit={handleSubmit(onSubmit)}>
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
				{
					bindingResultHasErrors
					? <div className="user-text">bindingResultHasErrors</div>
					: null
				}
				{
					overlappedUsername
					? <div className="user-text">overlappedUsername</div>
					: null
				}
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