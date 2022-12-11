import axios from "axios";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "../../styles/selectTapeModal.css";

interface props {
	open: boolean;
	close: () => void; // 함수 타입 정의할 때
}

const SelectTapeModal = (props: props): ReactElement => {
	const { open, close } = props;

	return (
		<>
			<div className={open ? "bg" : ""} />
			<div className={open ? "modal active" : "modal"}>
				{open ? (
					<div className="SelectTapeModal-area">
						<div className="SelectTapeModal-header">
							<div className="SelectTapeModal-header-text">테이프 색상</div>
							<div className="SelectTapeModal-selected-box">
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
						</div>

						<div className="SelectTapeModal-hr-box">
							<hr className="SelectTapeModal-hr" />
						</div>
						<div className="SelectTapemodal-colors-box">
							<div
								className="SelectTapemodal-color-option"
								style={{ backgroundColor: "#e9e1ec" }}
							>
								<div>연보라</div>
							</div>
							<div
								className="SelectTapemodal-color-option"
								style={{ backgroundColor: "#f2d4d6" }}
							>
								<div>복숭아</div>
							</div>
							<div
								className="SelectTapemodal-color-option"
								style={{ backgroundColor: "#d5d8f3" }}
							>
								<div>파랑</div>
							</div>
							<div
								className="SelectTapemodal-color-option"
								style={{ backgroundColor: "#f3ead5" }}
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
export default SelectTapeModal;
