import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/sendQuestionForm.css";
import Toastify from "./Toast";

export interface Props {
	userName: String;
}

function SendQuestionFormUserHome(props: Props) {
	const userName = props.userName;

	const onSubmit = async (data: any) => {
		await new Promise((r) => setTimeout(r, 100));

		// alert(JSON.stringify(data));
		console.log(data);

		await axios
			.post("/userHome/" + userName + "/", data)
			.then((res) => {
				console.log("posthere");
				console.log(data);
				localStorage.setItem("toastShow", "1");
				localStorage.setItem("toastText", "질문이 안전하게 전달되었습니다.");
				window.location.reload();
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
		// formState: { isSubmitting, isDirty, errors },
	} = useForm();

	// 유저 입력 값을 넣을 변수
	const [checkItemContent, setCheckItemContent] = useState("");
	// 줄 수를 계산해서 저장할 변수
	const [textareaHeight, setTextareaHeight] = useState(0);

	// 사용자 입력 값이 변경될 때마다 checkItemContent에 저장하고
	// 엔터('\n') 개수를 세서 textareaHeight에 저장
	const checkItemChangeHandler = (event: any) => {
		setTextareaHeight(event.target.value.split("\n").length - 1);
		setCheckItemContent(event.target.value);
	};

	function checkLengthHandler(event: any) {
		var text = event.target.value;
		var test_length = text.length;

		//최대 글자수
		var max_length = 5000;

		if (test_length > max_length) {
			alert(max_length + "자 이상 작성할 수 없습니다.");
			text = text.substr(0, max_length);
			event.target.value = text;
			event.target.focus();
		}
	}

	return (
		<div className="SendQuestionForm-container">
			<Toastify />
			<form
				className="SendQuestionForm-question-form"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="SendQuestionForm-questionForm-box">
					<span className="SendQuestionForm-cursur-bar">|</span>
					<textarea
						id="questionAdd"
						className="questionForm-textarea"
						value={checkItemContent}
						onInput={checkItemChangeHandler}
						onKeyUp={checkLengthHandler}
						style={{ height: (textareaHeight + 1) * 20 + "px" }}
						placeholder="질문해 주세요"
						{...register("questionContents", {
							required: "답변이 입력되지 않았습니다.",
						})}
					></textarea>
				</div>
				<hr className="SendQuestionForm-hr" />
				<div className="SendQuestionForm-footer">
					<img
						className="SendQuestionForm-hyperlink-btn"
						src="/buttons/link-icn.svg"
						alt=""
					/>
					<input
						id="hyperLinkAdd"
						className="QuestionForm-hyperlink-input"
						placeholder="첨부할 사이트 주소를 넣어주세요 (최대 1개)"
						onKeyUp={checkLengthHandler}
						{...register("questionHyperlink")}
					/>
					<button className="SendQuestionForm-send-question-btn" type="submit">
						<img src="/buttons/send-question-btn.svg" alt="" />
					</button>
				</div>
			</form>
		</div>
	);
}

export default SendQuestionFormUserHome;
