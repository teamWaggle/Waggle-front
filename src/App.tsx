import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LandingPage, SirenPage, SirenDetailPage, QuestionPage, SignUpPage } from "@/pages";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/siren" element={<SirenPage />} />
				<Route path="/question" element={<QuestionPage />} />
				<Route path="/siren/view/:id" element={<SirenDetailPage />} />
				<Route path="/signup" element={<SignUpPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
