import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/selectNoteModal.css";

interface props {
	open: boolean;
	close: () => void; // 함수 타입 정의할 때
}

const SelectNoteModal = (props: props): ReactElement => {
	const { open, close } = props;

	const [colorName, setColorName] = useState<any>();
	const [colorCode, setColorCode] = useState<any>();

	var colorDict: any = {};
	colorDict["연보라"] = "#e9e1ec";
	colorDict["복숭아"] = "#f2d4d6";
	colorDict["파랑"] = "#d5d8f3";
	colorDict["노랑"] = "#f3ead5";


	

	function handleNoteColorClick(event: any) {
		// var selectedColorName = event.target.textContent;
		document.addEventListener("click", function () {
			setColorName(event.target.textContent);

			setColorCode(colorDict[event.target.textContent]);
			console.log(colorName);
			console.log(colorCode);
		});
	}

	return (
		<>
			<div className={open ? "bg" : ""} />
			<div className={open ? "modal active" : "modal"}>
				{open ? (
					<div className="SelectNoteModal-area">
						<div className="SelectNoteModal-header">
							<div className="SelectNoteModal-header-text">질문노트 색상</div>
							<div className="SelectNoteModal-selected-box">
								<div
									className="SendQuestionForm-note-color"
									style={{ backgroundColor: "#e9e1ec" }}
								/>
								<div className="SendQuestionForm-note-color-text">
									{colorName}
								</div>
								<img
									className="SendQuestionForm-open-modal-btn"
									src="/buttons/chevron-note-select-btn.svg"
									alt=""
								/>
							</div>
						</div>

						<div className="SelectNoteModal-hr-box">
							<hr className="SelectNoteModal-hr" />
						</div>
						<div className="SelectNotemodal-colors-box">
							<div
								className="SelectNotemodal-color-option"
								style={{ backgroundColor: "#e9e1ec" }}
								onClick={handleNoteColorClick}
							>
								<div>연보라</div>
							</div>
							<div
								className="SelectNotemodal-color-option"
								style={{ backgroundColor: "#f2d4d6" }}
								onClick={handleNoteColorClick}
							>
								<div>복숭아</div>
							</div>
							<div
								className="SelectNotemodal-color-option"
								style={{ backgroundColor: "#d5d8f3" }}
								onClick={handleNoteColorClick}
							>
								<div>파랑</div>
							</div>
							<div
								className="SelectNotemodal-color-option"
								style={{ backgroundColor: "#f3ead5" }}
								onClick={handleNoteColorClick}
							>
								<div>노랑</div>
							</div>

							{/* 여기다가 계속 색 추가하면 됨 */}
						</div>
					</div>
				) : null}
			</div>
		</>
	);
};
export default SelectNoteModal;
