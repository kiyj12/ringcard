import axios from "axios";
import "../styles/layout/header.css";

function Header() {
	const handleHomeBtnClick = async () => {
		await axios
			.get("/home/unanswered")
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<header className="header">
			<div className="header-blank"></div>
			<div className="top-banner">
				<div className="home-btn" onClick={handleHomeBtnClick}>
					<img src="/buttons/home-icon.svg" width="21px" color="white" alt="" />
				</div>

				<div className="profile-pic">
					<img src="/profile.png" width="35px" color="white" alt="" />
				</div>
				<div className="menu-btn">
					<img src="/buttons/menu-icon.svg" width="21px" color="white" alt="" />
				</div>
			</div>
		</header>
	);
}

export default Header;
