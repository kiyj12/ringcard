import NowDate from "./NowDate";
import { IAnswer, IQuestion } from "./types";

export interface Props {
	question: IQuestion;
	answer: IAnswer;
}

function AnsweredQuestionNote(props: Props) {
	const question = props.question;
	const answer = props.answer;

	return (
		<div className="each-question-note-box">
			<div
				className="each-question-note-header-edge-img-box"
				style={{
					backgroundImage: `url("/notes/note${question.noteType}-top-edge.png")`,
				}}
			></div>
			<div
				className="each-question-note-body"
				style={{
					backgroundImage: `url("/notes/note${question.noteType}-body.png")`,
				}}
			>
				<div className="each-note-header">
					<div className="note-profile-pic">
						<img src="/test-anony-profile-pic.jpg" alt="" />
					</div>
					<NowDate questionUploadTime={question.uploadTime} />
				</div>
				<div className="each-note-content-box">
					<div className="each-note-content">{question.questionContents}</div>
				</div>
				<hr className="note-hr" />
				<div className="each-note-answer-content-box">
					{/* <div className="AnsweredQuestionNote-answer-profile-pic">
						<img src="/profile.png" alt="" />
					</div> */}
					<div className="AnsweredQuestionNote-answer-content">
						{answer.answerContents}
					</div>
				</div>
			</div>
			<div
				className="each-question-note-footer-edge-img-box"
				style={{
					backgroundImage: `url("/notes/note${question.noteType}-bottom-edge.png")`,
				}}
			></div>
		</div>
	);
}

export default AnsweredQuestionNote;
