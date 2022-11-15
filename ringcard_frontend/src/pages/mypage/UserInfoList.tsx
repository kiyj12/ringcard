import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

function UserInfoList(props: { userEmail: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
		return <div>{props.userEmail}</div>
	}

export default UserInfoList;