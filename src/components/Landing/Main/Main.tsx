import Searchbar from "../Searchbar/Searchbar";

import { mainStyle } from "./Main.styles";

const Main = () => {
	return (
		<div css={mainStyle}>
			<section>
				<Searchbar />
			</section>
		</div>
	);
};

export default Main;
