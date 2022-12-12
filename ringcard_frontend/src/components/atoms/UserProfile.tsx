import axios from "axios";
import { useEffect, useState } from "react";
import "../../styles/user/userHeader.css";
import "../../styles/user/userBox.css";
import "../../styles/user/userIcon.css";

function UserProfile() {
	return (
		<div className="user-profile-img">
			<img alt="" src="/profile-imgs/oring_1.png" width="77px" color="white" />
		</div>
	);
}

// export interface Props {
//   user: User[];
// }

// function UserProfile(props: Props) {
// 	return (
// <>
//   <div className="userInfo-profile-container"></div>
//       <div className="user-profile-img">
//         <img alt="" src="/profile.png" width="77px" color="white" />
//       </div>
//     {props.user.map((userRingcardName) =>(<div className="user-profile-name" valu></div>))}>

// </>
// 	);
// }

export default UserProfile;
