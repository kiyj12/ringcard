import { IAnswer, IQuestion } from "./types";
import QuestionFooter from "./QuestionNoteFooter";
import "../styles/question.css";
import NowDate from "./NowDate";
import React, { useState } from "react";

export interface Props {
	idx: number;
	question: IQuestion;
	answer: IAnswer;
}

function QuestionNoteAnony(props: Props) {
	const idx = props.idx;
	const question = props.question;
	const answer = props.answer;
	const [showAnswer, setShowAnswer] = useState<boolean>(false);

	const handleShowAnswerClick = async () => {
		setShowAnswer(!showAnswer);
	};

	function FindAnswer(e: { questionId: number }) {
		if (e.questionId === question.id) {
			return e;
		}
	}

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
						<NowDate questionUploadTime={question.uploadTime} />
					</div>
					<div className="each-note-content-box">
						<div className="each-note-content">{question.questionContents}</div>
					</div>
					<hr className="note-hr" />
					<div className="QuestionNoteAnony-note-footer">
						<div className="QuestionNoteAnony-note-footer-btns-container">
							<button onClick={handleShowAnswerClick}>
								{/* TODO: 얘 이미지 오면 바꾸기 */}
								<img
									className="note-send-answer-btn"
									src="/buttons/send-answer-btn.svg"
									alt=""
								/>
							</button>
						</div>
						{showAnswer ? (
							<div className="QuestionNoteAnony-note-content-answer">
								{answer.answerContents}
							</div>
						) : undefined}
					</div>
				</div>
				<div
					className="QuestionNoteAnony-each-question-note-footer-edge-img-box"
					style={{ backgroundImage: `url("/notes/yellow-note-edge.png")` }}
				></div>
			</div>
		</>
	);
}

export default QuestionNoteAnony;
