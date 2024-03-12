import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { useSetRecoilState } from "recoil";

import Header from "@/components/Header/Header";

import { isLoggedInState, memberIdState } from "@/recoil/atoms/auth";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
	const setIsLoggedIn = useSetRecoilState(isLoggedInState);
	const setMemberId = useSetRecoilState(memberIdState);

	useLayoutEffect(() => {
		if (localStorage.getItem("ACCESS_TOKEN")) {
			setIsLoggedIn(true);
		}

		if (localStorage.getItem("MEMBER_ID")) {
			setMemberId(Number(localStorage.getItem("MEMBER_ID")));
		}
	}, [setIsLoggedIn, setMemberId]);

	return (
		<>
			<Header />
			<Outlet />
			<ToastContainer position="top-center" style={{ width: "auto" }} autoClose={1000} />
		</>
	);
};

export default App;
