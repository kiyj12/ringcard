import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/userBox.css";
import "../../styles/editPassword.css";
import HeaderUser from "../../components/HeaderNoProfile";
import HeaderNoProfile from "../../components/HeaderNoProfile";
import { useForm } from "react-hook-form";

const EditPassword = () => {
  type ResponseList = {
    // pastPasswordBlank: boolean;
    pastPasswordFalse: boolean;
    // newPasswordBlank: boolean;
    newPasswordFalse: boolean;
    passwordChanged: boolean;
	}
	const [response, setResponse] = useState<ResponseList>({
		// pastPasswordBlank: false,
    pastPasswordFalse: false,
    // newPasswordBlank: false,
    newPasswordFalse: false,
    passwordChanged: false
	});
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

  function RedirectAndInputErrors(){
    // if(response.pastPasswordBlank){
		// 	return <div className="user-text-error">pastPasswordBlank</div>
		// }
    if(response.pastPasswordFalse){
			return <div className="user-text-error">pastPasswordFalse</div>
		}
    // else if(response.newPasswordBlank){
		// 	return <div className="user-text-error">newPasswordBlank</div>
		// }
    else if(response.newPasswordFalse){
			return <div className="user-text-error">newPasswordFalse</div>
		}
		else if(response.passwordChanged && submitted){
			// 위 조건 만족할 때만 loginForm으로 새로고침
			window.location.href = "/mypage/info/edit"
			return (null);
		}
		return (null);
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
				<div>
					<img alt="" src="/profile.png" width="77px" color="white" />
				</div>
				<div className="profile-pic-large-name">{user.userRingcardName}</div>
			</div>
      
			<div>
				<div className="user-box">
					<div className="user-box-in">
						<div className="user-text editPassword-text">현재 비밀번호</div>
						<input
							className="user"
							placeholder="현재 비밀번호"
              {...register("pastPassword", {
							required: "답변이 입력되지 않았습니다.",
							})}
						></input>
					</div>
					{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}

					<div className="user-box-in">
						<div className="user-text editPassword-text">새 비밀번호</div>
						<input
							className="user"
							placeholder="새 비밀번호"
              {...register("newPassword", {
							required: "답변이 입력되지 않았습니다.",
							})}
						></input>
					</div>

					<div className="user-box-in">
						<div className="user-text editPassword-text">새 비밀번호 확인</div>
						<input
							className="user"
							placeholder="새 비밀번호 확인"
              {...register("newPasswordConfirm", {
							required: "답변이 입력되지 않았습니다.",
							})}
						></input>
					</div>

					<div className="user-box-in">
            <RedirectAndInputErrors/>
          </div>

					<div className="user-box-in">
						<button  type="submit" className="user-btn editPassword-btn">
						<div className="user-btn-text">비밀번호 변경하기</div>
						</button>
					</div>

					<div className="user-box-in">
						<button className="user-btn editPassword-btn-cancel">
					  	<div className="user-btn-text editPassword-btn-text-cancel">비밀번호 변경 취소하기</div>
						</button>
					</div>
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