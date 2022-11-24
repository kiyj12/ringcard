import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/answerQuestionNote.css";

export interface Props {
	questionId: number;
}

function AnswerForm(props: Props) {
	const questionId = String(props.questionId);

	const onSubmit = async (data: any) => {
		await new Promise((r) => setTimeout(r, 100));

		// alert(JSON.stringify(data));
		console.log(data);

		await axios
			.post("/question/" + questionId + "/unanswered/user", data)
			.then((res) => {
				console.log("posthere");
				console.log(data);
				window.location.href = "/question/" + questionId + "/completed/user";
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

	return (
		<form className="answerForm-answer-form" onSubmit={handleSubmit(onSubmit)}>
			<div className="answerForm-text-box checkItem">
				<span className="cursur-bar">|</span>
				<textarea
					id="answerAdd"
					className="answerForm-textarea"
					value={checkItemContent}
					onInput={checkItemChangeHandler}
					style={{ height: (textareaHeight + 1) * 27 + "px" }}
					placeholder="답변을 적어주세요"
					{...register("answerContents", {
						required: "답변이 입력되지 않았습니다.",
					})}
				></textarea>
			</div>
			<div className="answerForm-btn-box">
				<button type="submit">
					<img
						className="note-send-answer-btn"
						src="/buttons/send-answer-btn.svg"
						alt=""
					/>
				</button>
			</div>
		</form>
	);
}

export default AnswerForm;
