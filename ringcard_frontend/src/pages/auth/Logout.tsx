import axios from "axios";
import { useEffect } from "react";

function Logout() {
	useEffect(() => {
		axios
			.get("/logout")
			.then((res) => {
        console.log("Logout.tsx");
				window.location.replace("/loginForm");
        console.log("Logout.tsx, replace success");
			})
			.catch((err) => {});
	}, []);

	return <></>;
}

export default Logout;
