import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { LandingPage, SirenPage, SirenDetailPage, QuestionPage, SignUpPage } from "@/pages";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
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
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
