import axios from "axios";
import { useForm } from "react-hook-form";

export interface Props {
	questionId: number;
}

function AnswerForm(props: Props) {
	const questionId = String(props.questionId);

	const {
		register,
		handleSubmit,
		formState: { isSubmitting, isDirty, errors },
	} = useForm();

	const onSubmit = async (data: any) => {
		await new Promise((r) => setTimeout(r, 100));

		// alert(JSON.stringify(data));

		await axios
			.post("/question/" + questionId + "/unanswered/user", data, {
				headers: {
					"Content-Type": `multipart/form-data; `,
				},
				// baseURL: 'http://localhost:8080'
			})
			.then((res) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

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
