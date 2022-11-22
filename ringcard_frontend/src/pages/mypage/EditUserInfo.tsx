import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/userBox.css";
import "../../styles/user/userIcon.css";
import "../../styles/editUserInfo.css";
import HeaderUser from "../../components/HeaderNoProfile";
import HeaderNoProfile from "../../components/HeaderNoProfile";
import { useForm } from "react-hook-form";

const EditUserInfo = () => {

	type ResponseList = {
		overlappedUsername: boolean;
	}
	const [response, setResponse] = useState<ResponseList>({
		overlappedUsername: false
	});
	// submitted==true여야 새로고침 되도록.
	const [submitted, setSubmitted] = useState(false);

	const [user, setUser] = useState<any>([]);
	useEffect(() => {
		axios
			.get("/mypage/info/edit")
			.then((res) => {
				setUser(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

  function BtnToEditPw(){
		function handleClick(e: any){
				window.location.href="/mypage/edit/password"
		}
			return(
				<button className="user-box-btn" onClick={handleClick}>변경</button>
			)
	}

	const onSubmit = async (data: any) => {
		await new Promise((r) => setTimeout(r, 100));

		// alert(JSON.stringify(data));
		console.log(data);

		await axios
			.post("/mypage/info/edit", data)
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
		if(response.overlappedUsername){
			return (
			<div className="user-text-error">overlappedUsername</div>
			)
		}
		else if(submitted) {
			// 위 조건 만족할 때만 loginForm으로 새로고침
			// window.location.href = "/mypage/info/edit"
			return (null);
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
		<div className="container">
			<HeaderNoProfile />
      <div className="userInfo-profile-container">
				<div>
					<img alt="" src="/profile.png" width="77px" color="white" />
				</div>
				<div className="profile-pic-large-name">{user.userRingcardName}</div>
			</div>

			<div>
				<div className="user-box">
					<div className="user-box-in">
						<div className="user-text">이름</div>
						<input
							className="user-icon user-icon-user-light"
							defaultValue={user.userRingcardName}
							placeholder="이름을 입력해주세요"
							{...register("userRingcardName", {
							required: "답변이 입력되지 않았습니다.",
							})}
						></input>
					</div>
					{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}

					<div className="user-box-in">
						<div className="user-text">아이디</div>
						<input
							className="user-icon user-icon-id-light"
							defaultValue={user.username}
							placeholder="아이디를 입력해주세요"
							{...register("username", {
							required: "답변이 입력되지 않았습니다.",
							})}
						></input>
					</div>

					<div className="user-box-in">
						<div className="user-text">비밀번호</div>
						<div className="user-box-div user-icon-dark">
							<input
								className="user-inner-transparent"
								defaultValue="●●●●●●●●●●"
								placeholder="●●●●●●●●●●"
								readOnly
							></input>
							{/* <button className="editUserInfo-input-pw-edit-button"><div className="editUserInfo-input-pw-edit-button-tag">변경</div></button>				 */}
							<BtnToEditPw/>
						</div>

						{/* <div className="email_div">
							E-mail
							<input type="text" name="email" className="email"/>
							<input type="submit" value="전송" className="btn"/>
						</div> */}
					</div>

				<div className="user-box-in">
					<div className="user-text">이메일</div>
					<input className="user-icon user-icon-email-light" defaultValue={user.userEmail} placeholder="이메일을 입력해주세요"
					{...register("userEmail", {
							required: "답변이 입력되지 않았습니다.",
							})} ></input>
				</div>

				<div className="user-box-in">
					<RedirectAndInputErrors/>
				</div>

				<div className="user-box-in">
					<button type="submit" className="user-btn editUserInfo-btn">
						<div className="user-btn-text">변경 사항 저장하기</div>
					</button>
				</div>
			</div>
		</div>
	</div>
</form>
	);
};

export default EditUserInfo;
