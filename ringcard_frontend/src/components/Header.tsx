import "../styles/layout/header.css";

function Header() {
	return (
		<header className="header">
			<div className="header-blank"></div>
			<div className="top-banner">
				<img alt="" src="/buttons/home-icon.svg" width="21px" color="white" />
				<div className="profile-pic">
					<img alt="" src="/profile.png" width="35px" color="white" />
				</div>
				<img alt="" src="/buttons/menu-icon.svg" width="21px" color="white" />
			</div>
		</header>
	);
}

export default Header;
