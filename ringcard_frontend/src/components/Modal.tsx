import React, { ReactElement } from "react";
import "../styles/layout/modal.css";

interface props {
	open: boolean;
	close: () => void; // 함수 타입 정의할 때
}

const Modal = (props: props): ReactElement => {
	const { open, close } = props;

	const handleMyInfoClick = () => {
		window.location.href = "/mypage/info";
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
							<div className="menu-element" onClick={handleMyInfoClick}>
								마이 페이지
							</div>
							<div className="menu-element">로그아웃</div>
						</div>
					</div>
				) : null}
			</div>
		</>
	);
};
export default Modal;
