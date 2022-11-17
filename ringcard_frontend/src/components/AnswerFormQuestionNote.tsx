import { IQuestion } from "./types";

export interface Props {
	question: IQuestion;
}

function AnswerFormQuestionNote(props: Props) {
	const question = props.question;

	return (
		<div
			className="question-note"
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
			<div className="note-content-box">
				<div className="note-content">{question.questionContents}</div>
			</div>
			<hr className="note-hr" />
      <Form>
        
      </Form>
			{/* <QuestionFooter question={question} /> */}
		</div>
	);
}

export default AnswerFormQuestionNote;
