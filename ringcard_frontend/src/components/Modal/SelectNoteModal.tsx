import axios from "axios";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "../../styles/selectNoteModal.css";

interface props {
	open: boolean;
	close: () => void; // 함수 타입 정의할 때
}

const SelectNoteModal = (props: props): ReactElement => {
	const { open, close } = props;

	return (
		<>
			<div className={open ? "bg" : ""} />
			<div className={open ? "modal active" : "modal"}>
				{open ? (
					<div className="SelectNoteModal-area">
						<div className="SelectNoteModal-selected-box">
							<div
								className="SendQuestionForm-note-color"
								style={{ backgroundColor: "#e9e1ec" }}
							/>
							<div className="SendQuestionForm-note-color-text">연보라</div>
							<img
								className="SendQuestionForm-open-modal-btn"
								src="/buttons/chevron-note-select-btn.svg"
								alt=""
							/>
						</div>
						{/* <div className="SelectNoteModal-hr-box">
							<hr className="SelectNoteModal-hr" />
						</div> */}
					</div>
				) : null}
			</div>
		</>
	);
};
export default SelectNoteModal;
