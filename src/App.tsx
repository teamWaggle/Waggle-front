import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import SirenPage from "./pages/SirenPage";
import QuestionPage from "./pages/QuestionPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/siren" element={<SirenPage />} />
				<Route path="/question" element={<QuestionPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
