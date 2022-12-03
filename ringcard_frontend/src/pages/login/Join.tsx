import React, { useState, useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/userBox.css";
import "../../styles/user/userIcon.css";
import "../../styles/user/userHeader.css";
import "../../styles/join.css";
import HeaderRingcaShort from "../../components/HeaderRingcaShort";
import userEvent from "@testing-library/user-event";

import { useNavigate } from "react-router-dom";

const Join = () => {

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
			.post("/joinForm", data)
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
				</div>

				<div className="user-box-in">
					<div className="user-text">이메일</div>
					<div className="user-box-div-light user-icon-email-light">
						<span className="user-icon-bar">|</span>
						<input className="user-inner-transparent" type="email"
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