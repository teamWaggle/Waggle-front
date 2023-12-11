import Searchbar from "../Searchbar/Searchbar";
import Sidebar from "../Sidebar/Sidebar";

import { mainStyle } from "./Main.styles";

const Main = () => {
	return (
		<div css={mainStyle}>
			<section>
				<Searchbar />
			</section>
			<Sidebar />
		</div>
	);
};

export default Main;
