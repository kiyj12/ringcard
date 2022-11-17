import "../styles/layout/headerNoProfile.css";

function HeaderNoProfile() {
	return (
		<div className="header-user">
			<div className="header-blank-user"></div>
			<div className="top-banner-user">
				<img alt="" src="/buttons/home-icon.svg" width="21px" color="white" />
				<img alt="" src="/buttons/menu-icon.svg" width="21px" color="white" />
			</div>
			<div className="profile-pic-large-top-blank"></div>
			<div className="profile-pic-large">
					<img alt="" src="/profile.png" width="77px" color="white" />
			</div>
			<div className="profile-pic-larg-name">김지연</div>
			<div className="profile-pic-blank"></div>
		</div>
	);
}

export default HeaderNoProfile;
