import { IQuestion } from "./types";
import QuestionFooter from "./QuestionNoteFooter";
import "../styles/question.css";
import NowDate from "./NowDate";
import HyperlinkBox from "./HyperlinkBox";
import { useEffect } from "react";
import { forEachChild } from "typescript";

export interface Props {
	idx: number;
	question: IQuestion;
}

function QuestionNote(props: Props) {
	const idx = props.idx;
	const question = props.question;

	// making tape 동적 삽입
	const tapeList = [
		"tape_PastelPink.svg",
		"tape_PastelYellow.svg",
		"tape_PastelGreen.svg",
		"tape_PastelBlue.svg",
		"tape_PastelPurple.svg",
	];
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
		const chosenTape = tapeList[Math.floor(Math.random() * cntTape)];
		const chosenPosition =
			tapePositionList[Math.floor(Math.random() * cntPosition)];
		tapeImage.setAttribute("src", `/masking-tapes/${chosenTape}`);
		tapeImage.setAttribute("style", chosenPosition);
	});

	// const tapeBoxes = document.getElementsByClassName(
	// 	"QuestionNote-maskingTape-box"
	// );

	// var tapeBoxList = Array.from(tapeBoxes);
	// tapeBoxList.forEach((tapeBox) => {
	// 	console.log(tapeBox)
	// 	var tapeImage = document.createElement("img");
	// 	const tape = tapeBox.appendChild(tapeImage);

	// 	var chosenTape = tapeList[Math.floor(Math.random() * tapeList.length)];
	// 	tape.setAttribute("src", `../masking-tapes/${chosenTape}`);
	// });

	return (
		<div
			className="question-note"
			key={idx}
			style={{
				backgroundImage: `url("/notes/yellow-note.png")`,
			}}
		>
			<div className="QuestionNote-maskingTape-box">
				<img className="QuestionNote-maskingTape-img" src="" alt="" />
			</div>
			<div className="note-header">
				<div className="note-profile-pic">
					<img src="/test-anony-profile-pic.jpg" alt="" />
				</div>
				{/* <div className="note-time">{nowDate}</div> */}
				<NowDate questionUploadTime={question.uploadTime} />
			</div>
			<div className="note-content-box">
				<div className="note-content">{question.questionContents}</div>
			</div>
			{question.questionHyperlink == null ||
			question.questionHyperlink === "" ? undefined : (
				<div className="QuestionNote-note-hyperlink-box">
					<HyperlinkBox hyperlinkContent={question.questionHyperlink} />
				</div>
			)}

			<hr className="note-hr" />
			<QuestionFooter question={question} />
		</div>
	);
}

export default QuestionNote;
