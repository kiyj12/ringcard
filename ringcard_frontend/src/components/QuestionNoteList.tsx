import React from "react";
import Pagination from "react-js-pagination";
import { IQuestion } from "./types";

import QuestionNote from "./QuestionNote";

export interface Props {
	questionList: IQuestion[];
}

function QuestionNoteList(props: Props) {
	// making tape 동적 삽입

	return (
		<>
			<div className="question-notes-container">
				{props.questionList.map((question, idx) => (
					<QuestionNote key={idx} idx={idx} question={question} />
				))}
			</div>
		</>
	);
}

export default QuestionNoteList;
