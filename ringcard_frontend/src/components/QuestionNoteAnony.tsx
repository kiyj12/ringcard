import { IAnswer, IQuestion } from "./types";
import QuestionFooter from "./QuestionNoteFooter";
import "../styles/question.css";
import NowDate from "./NowDate";
import React, { useState } from "react";

export interface Props {
	idx: number;
	question: IQuestion;
	answer: IAnswer;
	tapeUrl: string;
}

function QuestionNoteAnony(props: Props) {
	const idx = props.idx;
	const question = props.question;
	const answer = props.answer;
	const [showAnswer, setShowAnswer] = useState<boolean>(false);

	const handleShowAnswerClick = async () => {
		setShowAnswer(!showAnswer);
	};


	return (
		<>
			<div className="each-question-note-box">
				<div className="QuestionNote-maskingTape-box">
					<img
						className="QuestionNote-maskingTape-img"
						src={props.tapeUrl}
						alt=""
					/>
				</div>
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
					<div className="QuestionNoteAnony-note-footer">
						<div className="QuestionNoteAnony-note-footer-btns-container">
							<button onClick={handleShowAnswerClick}>
								{showAnswer ? (
									<img
										className="note-send-answer-btn"
										src="/buttons/chevron-down-btn.svg"
										alt=""
										style={{ transform: "scaleY(-1)" }}
									/>
								) : (
									<img
										className="note-send-answer-btn"
										src="/buttons/chevron-down-btn.svg"
										alt=""
									/>
								)}
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

					style={{
						backgroundImage: `url("/notes/note${question.noteType}-bottom-edge.png")`,
					}}

				></div>
			</div>
		</>
	);
}


export default QuestionNoteAnony;

