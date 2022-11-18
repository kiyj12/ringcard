import axios from "axios";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import AnswerCompletedPage from "../pages/question/AnswerCompletedPage";

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
		formState: { isSubmitting, isDirty, errors },
	} = useForm();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="answerAdd">답변 폼</label>
				<textarea
					id="answerAdd"
					placeholder="답변을 입력하세요"
					{...register("answerContents", {
						required: "답변이 입력되지 않았습니다.",
					})}
				></textarea>
			</div>
			<div>
				<button type="submit">답변 등록</button>
			</div>
		</form>
	);
}

export default AnswerForm;
