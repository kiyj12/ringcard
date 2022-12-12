import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/userHeader.css";
import "../../styles/user/userBox.css";
import "../../styles/user/userIcon.css";
import "../../styles/editUserInfo.css";
import HeaderNoProfile from "../../components/Header/HeaderNoProfile";
import { useForm } from "react-hook-form";
import UserProfile from "../../components/atoms/UserProfile";
import Toastify from "../../components/utils/Toast";
import { Link } from "react-router-dom";

const EditUserRingcardName = () => {
	type ResponseList = {
		overlappedUsername: boolean;
	};
	const [response, setResponse] = useState<ResponseList>({
		overlappedUsername: false,
	});
	// submitted==true여야 새로고침 되도록.
	const [submitted, setSubmitted] = useState(false);

	const [user, setUser] = useState<any>([]);
	const [userRingcardName, setUserRingcardName] = useState();

	useEffect(() => {
		axios
			.get("/mypage/info/edit")
			.then((res) => {
				setUser(res.data);
				setUserRingcardName(res.data.userRingcardName);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.config);
				console.log(err.response.data);
			});
	}, []);

	const onSubmit = async (data: any) => {
		await new Promise((r) => setTimeout(r, 100));

		// alert(JSON.stringify(data));
		console.log(data);

		await axios
			.post("/mypage/info/edit/userRingcardName", data)
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

	function RedirectAndInputErrors() {
		if (response.overlappedUsername) {
			return <div className="user-text-error">overlappedUsername</div>;
		} else if (submitted) {
			// 위 조건 만족할 때만 loginForm으로 새로고침
			localStorage.setItem("toastShow", "1");
			localStorage.setItem("toastText", "개인 정보가 수정되었습니다.");
			window.location.href = "/mypage/info";
			return null;
		}
		return null;
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
					<UserProfile />
					<div className="user-profile-name">{user.userRingcardName}</div>
				</div>

				<div>
					<div className="user-box">
						{/* <div className="user-box-in">
						<div className="user-text">변경할 이름</div>
						<input
							type="userRingcardName"
							className="user-icon user-icon-id-light"
							// placeholder={user.userRingcardName}
							{...register("userRingcardName", {
							required: "답변이 입력되지 않았습니다.",
							})}
						></input>
					</div> */}

						<div className="user-box-in">
							<div className="user-text">기존 이름</div>
							<input
								className="user-icon user-icon-user-dark"
								value={userRingcardName}
								// placeholder="이름을 입력해주세요"
								readOnly
							></input>
						</div>

						<div className="user-box-in">
							<div className="user-text">변경할 이름</div>
							<input
								className="user-icon user-icon-user-light"
								// defaultValue={user.userRingcardName}
								// placeholder="이름을 입력해주세요"
								{...register("userRingcardName", {
									required: "답변이 입력되지 않았습니다.",
								})}
							></input>
						</div>

						<div className="user-box-in">
							<RedirectAndInputErrors />
						</div>

						<div className="user-box-in flex-spacebetween">
							<button type="button" className="cancel-btn">
								<Link to="/mypage/info" style={{ textDecoration: "none" }}>
									<div className="user-btn-text">취소하기</div>
								</Link>
							</button>
							<button type="submit" className="editUserInfo-btn">
								<div className="user-btn-text">저장하기</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};

export default EditUserRingcardName;
