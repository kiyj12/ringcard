import axios from "axios";
import { url } from "inspector";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import Question from "./Question";
import { IQuestion } from "./types";
import "../styles/question.css";

function QuestionList({ questionList }: { questionList: IQuestion[] }) {
	return (
		<>
			<div className="question-notes-container">
				{questionList.map((question, idx) => (
					<div
						className="question-note"
						key={idx}
						style={{
							backgroundImage: `url("/notes/yellow-note.png")`,
						}}
					>
						<div className="note-header"></div>
						<div className="note-contents">
							<div>{question.questionContents}</div>
						</div>
						<hr className="note-hr" />
						<div className="note-footer">
							<img
								className="note-trashcan"
								src="/buttons/trashcan-btn.svg"
								alt=""
							/>
							<img
								className="note-collection"
								src="/buttons/collection-btn.svg"
								alt=""
							/>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default QuestionList;
