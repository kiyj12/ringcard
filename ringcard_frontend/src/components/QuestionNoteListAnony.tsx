import axios from "axios";
import { url } from "inspector";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { IAnswer, IQuestion } from "./types";

import QuestionNoteAnony from "./QuestionNoteAnony";
import React from "react";

export interface Props {
	map: [IQuestion, IAnswer][];
	questionId: string;
}

function QuestionNoteList(props: Props) {
	const QandAmap = props.map;
	const questionId = Number(props.questionId);

	return (
		// questionId와 겹치는 질문 리스트에서 제거
		<div>
			{QandAmap.map((QA, idx) => (
					<div>
						{questionId!=QA[0].id 
						? (<div className="question-notes-container">
								<QuestionNoteAnony
									key={idx}
									idx={idx}
									question={QA[0]}
									answer={QA[1]}
								/>
							</div>)
						: null}
					</div>
				))
			}
		</div>

		// <div className="question-notes-container">
		// 	{QandAmap.map((QA, idx) => (
		// 		<QuestionNoteAnony
		// 			key={idx}
		// 			idx={idx}
		// 			question={QA[0]}
		// 			answer={QA[1]}
		// 		/>
		// 	))}
		// </div>

	);
}

export default QuestionNoteList;
