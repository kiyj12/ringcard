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

	const tapeList = ["tape1.svg", "tape2.svg"];

	// img 태그 동적 삽입
	const tapeImages = document.getElementsByClassName(
		"QuestionNote-maskingTape-img"
	);

	var tapeImageList = Array.from(tapeImages);

	tapeImageList.forEach((tapeImage) => {
		const chosenTape = tapeList[Math.floor(Math.random() * tapeList.length)];
		tapeImage.setAttribute("src", `../masking-tapes/${chosenTape}`);
	});

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
