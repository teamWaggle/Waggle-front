import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { useSetRecoilState } from "recoil";

import {
	LandingPage,
	SirenPage,
	SirenDetailPage,
	QuestionPage,
	SignUpPage,
	PlanningPage,
} from "@/pages";

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

	const RoutesProps = [
		{ path: "/", element: <LandingPage /> },
		{ path: "/siren", element: <SirenPage /> },
		{ path: "/question", element: <QuestionPage /> },
		{ path: "/siren/view/:id", element: <SirenDetailPage /> },
		{ path: "/signup", element: <SignUpPage /> },
		{ path: "/planning", element: <PlanningPage /> },
	];

	return (
		<>
			<ToastContainer position="top-center" style={{ width: "auto" }} autoClose={1000} />
			<BrowserRouter>
				<Routes>
					{RoutesProps.map((route, index) => (
						<Route key={index} path={route.path} element={route.element} />
					))}
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
