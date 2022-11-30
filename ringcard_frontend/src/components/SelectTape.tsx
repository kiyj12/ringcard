import { useParams } from "react-router-dom";
import { IQuestion } from "./types";

export interface Props {
	question: IQuestion;
}
function SelectTape(props: Props) {
	const question = props.question;
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

	const tapeImage = document.querySelector(".QuestionNote-maskingTape-img");
	// console.log(tapeImages);

	// var tapeImageList = Array.from(tapeImages);
	var tapeType = String(question.tapeType);
	// console.log(tapeType);
	// console.log(tapeImageList);

	// tapeImageList.forEach((tapeImage) => {
	// console.log(tapeImage);
	const chosenPosition =
		tapePositionList[Math.floor(Math.random() * cntPosition)];
	if (tapeImage != null) {
		tapeImage.setAttribute("style", chosenPosition);

		tapeImage.setAttribute("src", `/masking-tapes/tape${tapeType}.svg`);
		// console.log(`${tapeType}`);
	}

	// });

	return <></>;
}
export default SelectTape;
