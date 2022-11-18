import AnswerForm from "./AnswerForm";
import { IQuestion } from "./types";
import "../styles/question.css";
import "../styles/answerQuestionNote.css";

export interface Props {
	question: IQuestion;
}

function AnswerFormQuestionNote(props: Props) {
	const question = props.question;

	return (
		<div
			className="each-question-note"
			style={{
				backgroundImage: `url("/notes/yellow-note.png")`,
			}}
		>
			<div className="note-header">
				<div className="note-profile-pic">
					<img src="/test-anony-profile-pic.jpg" alt="" />
				</div>
				<div className="note-time">5분 전</div>
			</div>
			<div className="each-note-content-box">
				<div className="each-note-content">
					{question.questionContents}
				</div>
			</div>
			<hr className="note-hr" />
			<div className="note-answer-form-box">
				<AnswerForm questionId={question.id} />
			</div>
			{/* <QuestionFooter question={question} /> */}
		</div>
	);
}

export default AnswerFormQuestionNote;
