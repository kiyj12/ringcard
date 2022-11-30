import axios from "axios";
import { url } from "inspector";
import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { IQuestion } from "./types";

import QuestionNote from "./QuestionNote";

export interface Props {
	questionList: IQuestion[];
}

function makeTapeUrl(tapeType: Number) {
	const tapeTypeStr = String(tapeType);
	const result = String("/masking-tapes/tape" + tapeTypeStr + ".svg");
	return result;
}
function makeNoteUrl(noteType: Number) {
	const noteTypeStr = String(noteType);
	return noteTypeStr;
}

function QuestionNoteList(props: Props) {
	// making tape 동적 삽입
	const tapeList = ["1", "2", "3", "4", "5"];
	const cntTape = tapeList.length;
	const tapePositionList = [
		"width: 120px; height: 28px; transform: rotate(-30deg); margin: -10px auto -15px -40px;",
		"width: 130px; height: 28px; transform: rotate(-18deg); margin: -20px auto -30px -30px;",
		"width: 130px; height: 28px;  margin: 0 auto;  margin-top: -25px;",
		"width: 130px; height: 28px; margin: 0 auto 0 auto; margin-top: -22.5px; transform: rotate(6deg);",
		"width: 130px; height: 28px; transform: rotate(20deg); margin: -12px -40px -10px auto;",
	];
	const cntPosition = tapePositionList.length;

	const tapeImages = document.getElementsByClassName(
		"QuestionNote-maskingTape-img"
	);

	var tapeImageList = Array.from(tapeImages);

	tapeImageList.forEach((tapeImage) => {
		const chosenPosition =
			tapePositionList[Math.floor(Math.random() * cntPosition)];
		tapeImage.setAttribute("style", chosenPosition);
	});

	return (
		<>
			<div className="question-notes-container">
				{props.questionList.map((question, idx) => (
					<QuestionNote
						key={idx}
						idx={idx}
						question={question}
						tapeUrl={makeTapeUrl(question.tapeType)}
						noteUrl={makeNoteUrl(question.noteType)}
					/>
				))}
			</div>
		</>
	);
}

export default QuestionNoteList;
