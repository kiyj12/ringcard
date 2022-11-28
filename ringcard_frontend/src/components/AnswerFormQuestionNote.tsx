import AnswerForm from "./AnswerForm";
import { IQuestion } from "./types";
import "../styles/question.css";
import "../styles/answerQuestionNote.css";
import NowDate from "./NowDate";

export interface Props {
	question: IQuestion;
}

function AnswerFormQuestionNote(props: Props) {
	const question = props.question;

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
						<AnswerForm questionId={question.id} />
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

export default AnswerFormQuestionNote;
