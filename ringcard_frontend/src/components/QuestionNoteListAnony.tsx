import axios from "axios";
import { url } from "inspector";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { IAnswer, IQuestion } from "./types";

import QuestionNote from "./QuestionNoteAnony";
import React from "react";

export interface Props {
	map: [[IQuestion, IAnswer]];
}

function QuestionNoteList(props: Props) {
	const QandAmap = props.map;
	console.log(QandAmap);
	console.log(QandAmap[0]);
	// answerList.forEach(AnswerForTheQuestion);
	// const answer = answerList.find(AnswerForTheQuestion(question));
	return (
		<>
			<div className="question-notes-container">
				{QandAmap.map((QA, idx) => (
					// answerList.find(a => a.questionId === question.id);

					<QuestionNote key={idx} idx={idx} question={QA[0]} answer={QA[1]} />
				))}
			</div>
		</>
	);
}

export default QuestionNoteList;
