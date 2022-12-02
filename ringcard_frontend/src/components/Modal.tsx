import axios from "axios";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "../styles/layout/modal.css";

interface props {
	open: boolean;
	close: () => void; // 함수 타입 정의할 때
}

const Modal = (props: props): ReactElement => {
	const { open, close } = props;

	// const handleMyInfoClick = async () => {
	// 	await axios
	// 		.get("/mypage/info")
	// 		.then((res) => {
	// 			window.location.href = "/mypage/info";
	// 			console.log(
	// 				"Successfully enter handleMyInfoClick in QuestionNoteFooter :D"
	// 			);
	// 			console.log(res.data);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	const onClickHandler = () => {
		axios
			.get("/logout")
			.then((response) => {
				window.location.replace("/loginForm");
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
					<div className="area">
						<div className="modal-close">
							<button onClick={close}>
								<img src="/buttons/x.svg" alt=""></img>
							</button>
						</div>
						<hr className="menu-modal-hr" />
						<div className="menu-container">
							<Link to={"/mypage/info"} style={{ textDecoration: "none" }}>
								<div className="menu-element">마이 페이지</div>
							</Link>

							<div className="menu-element" onClick={onClickHandler}>
								로그아웃
							</div>
						</div>
					</div>
				) : null}
			</div>
		</>
	);
};
export default Modal;
