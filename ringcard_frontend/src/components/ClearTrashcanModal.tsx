import axios from "axios";
import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/clearTrashcanModal.css";

interface props {
	open: boolean;
	close: () => void; // 함수 타입 정의할 때
}

const ClearTrashcanModal = (props: props): ReactElement => {
	const { open, close } = props;

	// const onClickHandler = () => {
	// 	axios
	// 		.get("/logout")
	// 		.then((response) => {
	// 			window.location.replace("/loginForm");
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	const handleClearTrashcanClick = async () => {
		await axios
			.get("/home/trashcan/clearTrashcan")
			.then((res) => {
				console.log(
					"Successfully enter handleClearTrashcanClick in HomeTrashcan :D"
				);
				console.log(res.data);

				window.history.go(0);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<div className={open ? "bg" : ""} />
			<div className={open ? "modal active" : "modal"}>
				{open ? (
					<div className="ClearTrashcanModal-area">
						<div className="ClearTrashcanModal-container">
							휴지통에 있는 모든 질문들이 삭제됩니다.
							<br />
							삭제하시겠습니까?
						</div>
						<div className="ClearTrashcanModal-footer">
							<button className="ClearTrashcanModal-close-btn" onClick={close}>
								닫기
							</button>
							<button
								className="ClearTrashcanModal-delete-btn"
								onClick={handleClearTrashcanClick}
							>
								삭제하기
							</button>
						</div>
					</div>
				) : null}
			</div>
		</>
	);
};

export default ClearTrashcanModal;
