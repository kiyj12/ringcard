import { IQuestion } from "./types";
import "../styles/question.css";
import "../styles/answerQuestionNote.css";
import EditAnswerForm from "./EditAnswerForm";
import NowDate from "./NowDate";

export interface Props {
	question: IQuestion;
	oldAnswer: String;
}

function EditAnswerFormQuestionNote(props: Props) {
	const question = props.question;
	const oldAnswer = props.oldAnswer;

	return (
		<>
			<div className="each-question-note-box">
				<div
					className="each-question-note-header-edge-img-box"
					style={{ backgroundImage: `url("/notes/yellow-note-top-edge.png")` }}
				></div>
				<div className="each-question-note-body">
					<div className="each-note-header">
						<div className="note-profile-pic">
							<img src="/test-anony-profile-pic.jpg" alt="" />
						</div>
						<NowDate questionUploadTime={question.uploadTime}/>
					</div>
					<div className="each-note-content-box">
						<div className="each-note-content">{question.questionContents}</div>
					</div>
					<hr className="note-hr" />
					<div className="each-note-answer-form-box">
						<EditAnswerForm questionId={question.id} oldAnswer={oldAnswer} />
					</div>
				</div>
				<div
					className="each-question-note-footer-edge-img-box"
					style={{ backgroundImage: `url("/notes/yellow-note-edge.png")` }}
				></div>
			</div>
		</>
	);
}

export default EditAnswerFormQuestionNote;
