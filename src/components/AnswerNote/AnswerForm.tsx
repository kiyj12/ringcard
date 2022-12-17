import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/answerQuestionNote.css";

export interface Props {
	questionId: number;
}

function AnswerForm(props: Props) {
	const questionId = String(props.questionId);

	const onSubmit = async (data: any) => {
		await new Promise((r) => setTimeout(r, 100));

		await axios
			.post("/question/" + questionId + "/unanswered/user", data)
			.then((res) => {
				window.location.href = "/question/" + questionId + "/completed/user";
			})
			.catch(function (error) {
				console.log(error.config);
			});
	};

	const { register, handleSubmit } = useForm();

	const [checkItemContent, setCheckItemContent] = useState("");
	const [textareaHeight, setTextareaHeight] = useState(0);

	const checkItemChangeHandler = (event: any) => {
		setTextareaHeight(event.target.value.split("\n").length - 1);
		setCheckItemContent(event.target.value);
	};

	function checkLengthHandler(event: any) {
		var text = event.target.value;
		var test_length = text.length;

		var max_length = 5000;

		if (test_length > max_length) {
			alert(max_length + "자 이상 작성할 수 없습니다.");
			text = text.substr(0, max_length);
			event.target.value = text;
			event.target.focus();
		}
	}

	return (
		<form className="answerForm-answer-form" onSubmit={handleSubmit(onSubmit)}>
			<div className="answerForm-text-box checkItem">
				<span className="cursur-bar">|</span>
				<textarea
					id="answerAdd"
					className="answerForm-textarea"
					value={checkItemContent}
					onInput={checkItemChangeHandler}
					onKeyUp={checkLengthHandler}
					style={{
						height: (textareaHeight + 1) * 27 + "px",
						whiteSpace: "pre-wrap",
					}}
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
