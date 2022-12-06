import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/userBox.css";
import "../../styles/user/userIcon.css";
import "../../styles/user/userHeader.css";
import "../../styles/editPassword.css";
import HeaderUser from "../../components/HeaderNoProfile";
import HeaderNoProfile from "../../components/HeaderNoProfile";
import { useForm } from "react-hook-form";
import UserProfile from "../../components/UserProfile";
import Toastify from "../../components/Toast";

const EditPassword = () => {
	type ResponseList = {
		// pastPasswordBlank: boolean;
		pastPasswordFalse: boolean;
		// newPasswordBlank: boolean;
		passwordSame: boolean;
		newPasswordFalse: boolean;
		passwordChanged: boolean;
	};
	const [response, setResponse] = useState<ResponseList>({
		// pastPasswordBlank: false,
		pastPasswordFalse: false,
		// newPasswordBlank: false,
		passwordSame: false,
		newPasswordFalse: false,
		passwordChanged: false,
	});

	// PW toggle start.
	const [showPw, setShowPw] = useState<boolean>(false);
	const toggleShowPw = () => {
		setShowPw(!showPw);
	};

	function handlePwClick(e: any) {
		toggleShowPw();
	}

	function ShowPw(props: any) {
		return (
			<button
				value="변경"
				className="user-show-pw"
				onClick={handlePwClick}
			></button>
		);
	}

	function HidePw(props: any) {
		return (
			<button
				value="변경"
				className="user-hide-pw"
				onClick={handlePwClick}
			></button>
		);
	}
	// PW toggle fin.

	const [submitted, setSubmitted] = useState(false);

	const [user, setUser] = useState<any>([]);
	useEffect(() => {
		axios
			.get("/mypage/info")
			.then((res) => {
				setUser(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const onSubmit = async (data: any) => {
		await new Promise((r) => setTimeout(r, 100));

		// alert(JSON.stringify(data));
		console.log(data);

		await axios
			.post("/mypage/edit/password", data)
			.then((res) => {
				console.log(data);
				setResponse(res.data);
				console.log(res.data);
				setSubmitted(true);
			})
			.catch(function (error) {
				console.log(error.config);
			});
	};

	function RedirectAndInputErrors() {
		// if(response.pastPasswordBlank){
		// 	return <div className="user-text-error">pastPasswordBlank</div>
		// }
		if (response.pastPasswordFalse) {
			return (
				<div className="user-text-error">
					pastPasswordFalse 현재 비밀번호를 정확히 입력해 주세요
				</div>
			);
		}
		// else if(response.newPasswordBlank){
		// 	return <div className="user-text-error">newPasswordBlank</div>
		// }
		else if (response.passwordSame) {
			return (
				<div className="user-text-error">
					passwordSame 새 비밀번호를 현재 비밀번호와 다르게 변경해 주세요.
				</div>
			);
		} else if (response.newPasswordFalse) {
			return (
				<div className="user-text-error">
					newPasswordFalse 새 비밀번호와 비밀번호 확인이 일치하지 않습니다.
				</div>
			);
		} else if (response.passwordChanged && submitted) {
			// 위 조건 만족할 때만 loginForm으로 새로고침
			localStorage.setItem("toastShow", "1");
			localStorage.setItem("toastText", "비밀번호가 변경되었습니다.");
			window.location.href = "/mypage/info";
			return null;
		}
		return null;
	}

	// function ButtonToUserInfoEdit(){
	// 	function handleClick(e: any){
	// 			window.location.href="/mypage/info/edit"
	// 	}
	//   return(
	//         <button className="user-btn editPassword-btn-cancel" onClick={handleClick}>
	// 				  <div className="user-btn-text editPassword-btn-text-cancel">비밀번호 변경 취소하기</div>
	// 				</button>)
	// }

	const {
		register,
		handleSubmit,
		formState: { isSubmitting, isDirty, errors },
	} = useForm();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="container">
				<HeaderNoProfile />
				<div className="userInfo-profile-container">
					<UserProfile />
					<div className="user-profile-name">{user.userRingcardName}</div>
				</div>

				<div>
					<div className="user-box">
						<div className="user-box-in">
							<div className="user-text">현재 비밀번호</div>
							<div className="user-box-div user-icon-light">
								<input
									type={showPw ? "text" : "password"}
									className="user-inner-transparent"
									// placeholder="현재 비밀번호"
									{...register("pastPassword", {
										required: "답변이 입력되지 않았습니다.",
									})}
								></input>
								{showPw ? (
									<ShowPw onClick={toggleShowPw} />
								) : (
									<HidePw onClick={toggleShowPw} />
								)}
							</div>
						</div>
						{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}

						<div className="user-box-in">
							<div className="user-text">새 비밀번호</div>
							<div className="user-box-div user-icon-light">
								<input
									type={showPw ? "text" : "password"}
									className="user-inner-transparent"
									// placeholder="새 비밀번호"
									{...register("newPassword", {
										required: "답변이 입력되지 않았습니다.",
									})}
								></input>
								{showPw ? (
									<ShowPw onClick={toggleShowPw} />
								) : (
									<HidePw onClick={toggleShowPw} />
								)}
							</div>
						</div>

						<div className="user-box-in">
							<div className="user-text">새 비밀번호 확인</div>
							<div className="user-box-div user-icon-light">
								<input
									type={showPw ? "text" : "password"}
									className="user-inner-transparent"
									// placeholder="새 비밀번호 확인"
									{...register("newPasswordConfirm", {
										required: "답변이 입력되지 않았습니다.",
									})}
								></input>
								{showPw ? (
									<ShowPw onClick={toggleShowPw} />
								) : (
									<HidePw onClick={toggleShowPw} />
								)}
							</div>
						</div>

						<div className="user-box-in">
							<RedirectAndInputErrors />
						</div>

						<div className="user-box-in">
							<button type="submit" className="user-btn editPassword-btn">
								<div className="user-btn-text">비밀번호 변경하기</div>
							</button>
						</div>

						{/* <div className="user-box-in">
						<button className="user-btn editPassword-btn-cancel">
					  	<div className="user-btn-text editPassword-btn-text-cancel">비밀번호 변경 취소하기</div>
						</button>
					</div> */}
					</div>
				</div>
				{/* 여기에 비밀번호 찾기?? */}
				{/* <div className="editPassword-delete-box">
				<div className="editPassword-delete">
					<a className="editPassword-delete-tag" href="/">링카 계정을 완전히 지우고 싶어요</a>
				</div>
			</div> */}
			</div>
		</form>
	);
};

export default EditPassword;
