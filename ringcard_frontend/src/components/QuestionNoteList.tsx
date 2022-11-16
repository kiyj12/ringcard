import axios from "axios";
import { url } from "inspector";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { IQuestion } from "./types";
import "../styles/question.css";
import QuestionFooter from "./QuestionNoteFooter";

export interface Props {
	questionList: IQuestion[];
}

function QuestionList(props: Props) {
	return (
		<>
			<div className="question-notes-container">
				{props.questionList.map((question, idx) => (
					<div
						className="question-note"
						key={idx}
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
						<QuestionFooter question={question} />
					</div>
				))}
			</div>
		</>
	);
}

export default QuestionList;
