import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import SirenPage from "./pages/SirenPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/siren" element={<SirenPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
