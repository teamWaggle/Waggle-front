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
	TeamPlanningPage,
} from "@/pages";
import { isLoggedInState } from "@/store/auth";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
	const setIsLoggedIn = useSetRecoilState(isLoggedInState);

	useLayoutEffect(() => {
		if (localStorage.getItem("ACCESS_TOKEN")) {
			setIsLoggedIn(true);
		}
	}, [setIsLoggedIn]);

	return (
		<>
			<ToastContainer position="top-center" style={{ width: "auto" }} autoClose={1000} />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/siren" element={<SirenPage />} />
					<Route path="/question" element={<QuestionPage />} />
					<Route path="/siren/view/:id" element={<SirenDetailPage />} />
					<Route path="/signup" element={<SignUpPage />} />
					<Route path="/planning" element={<TeamPlanningPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
