import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import HeaderRingcaShort from "../../components/HeaderRingcaShort";
import "../../styles/layout/layout.css";

function FindPassword() {
	type ResponseList = {
		bindingResultHasErrors: boolean;
		noEmailLikeThat: boolean;
	};
	const [response, setResponse] = useState<ResponseList>({
		bindingResultHasErrors: false,
		noEmailLikeThat: false,
	});
	// submitted==true여야 새로고침 되도록.
	const [submitted, setSubmitted] = useState(false);

	const onSubmit = async (data: any) => {
		await new Promise((r) => setTimeout(r, 100));

		// alert(JSON.stringify(data));
		console.log(data);

		await axios
			.post("/findPassword", data)
			.then((res) => {
				setResponse(res.data);
				console.log(res.data);
				setSubmitted(true);
			})
			.catch((err) => {
				console.log(err.config);
			});
	};

	function RedirectAndInputErrors() {
		if (response.bindingResultHasErrors && response.noEmailLikeThat) {
			return (
				<>
					<div className="user-text-error">데이터에 에러가 발생하였습니다.</div>
					<div className="user-text-error">존재하지 않는 이메일입니다.</div>
				</>
			);
		} else if (response.bindingResultHasErrors) {
			return (
				<div className="user-text-error">데이터에 에러가 발생하였습니다.</div>
			);
		} else if (response.noEmailLikeThat) {
			return <div className="user-text-error">존재하지 않는 이메일입니다.</div>;
		} else if (submitted) {
			// 위 조건 만족할 때만 loginForm으로 새로고침
			window.location.href = "/loginForm";
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
		<div className="FindPassword-container">
			<div className="container">
				<HeaderRingcaShort />

				<form onSubmit={handleSubmit(onSubmit)} name="sendEmail">
					<p>입력한 이메일로 임시 비밀번호가 전송됩니다.</p>
					<div>
						<div className="user-box-in">
							<div className="user-text">이메일</div>
							<div className="user-box-div-light user-icon-email-light">
								<span className="user-icon-bar">|</span>
								<input
									className="user-inner-transparent"
									type="email"
									{...register("userEmail", {
										required: "가입할 때 입력한 이메일을 입력해주세요.",
									})}
								></input>
							</div>
						</div>
					</div>
					<RedirectAndInputErrors />
					<div className="text-center">
						<button type="submit" className="btn" id="checkEmail">
							비밀번호 발송
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default FindPassword;
