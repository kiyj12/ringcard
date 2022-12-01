import axios from "axios";
import { url } from "inspector";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { IAnswer, IQuestion } from "./types";

import QuestionNoteAnony from "./QuestionNoteAnony";
import React from "react";

export interface Props {
  map: [IQuestion, IAnswer][];
}

function makeTapeUrl(tapeType: Number) {
	const tapeTypeStr = String(tapeType);
	const result = String("/masking-tapes/tape" + tapeTypeStr + ".svg");
	return result;
}

function QuestionNoteList(props: Props) {
	const QandAmap = props.map;

	const tapePositionList = [
		"width: 120px; height: 28px; transform: rotate(-30deg); margin: 13px auto -15px -10px;",
		"width: 110px; height: 28px; transform: rotate(-18deg); margin: 5px auto -30px -5px;",
		"width: 130px; height: 28px;  margin: 0 auto;  margin-top: -5px;",
		"width: 130px; height: 28px; margin: 0 auto; margin-top: -5px; transform: rotate(6deg);",
		"width: 130px; height: 28px; transform: rotate(18deg); margin: 7px 0px -10px auto;",
		"width: 95px; height: 28px; transform: rotate(36deg); margin: 11px -10px -10px auto;",
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
				{QandAmap.map((QA, idx) => (
					<QuestionNoteAnony
						key={idx}
						idx={idx}
						question={QA[0]}
						answer={QA[1]}

						tapeUrl={makeTapeUrl(QA[0].tapeType)}

					/>
				))}
			</div>
		</>
	);
}

export default QuestionNoteList;

