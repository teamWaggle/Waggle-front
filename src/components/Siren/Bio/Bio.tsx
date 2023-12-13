import Flex from "@components/common/Flex/Flex";
import { buttonStyle, sectionStyle, titleStyle } from "./Bio.style";

import SirenCard from "../SirenCard/SirenCard";

const Bio = () => {
	return (
		<section css={sectionStyle}>
			<Flex styles={{ gap: "50px", marginTop: "82px" }}>
				<Flex styles={{ direction: "column", gap: "52px" }}>
					<Flex styles={{ direction: "column", gap: "10px" }} css={titleStyle}>
						<p>Waggle에서</p>
						<p>위급한 상황을 알리고</p>
						<p>견주들에게 도움을</p>
						<p>요청해보세요!</p>
					</Flex>
					<button css={buttonStyle}>글 작성하기</button>
				</Flex>
				<Flex styles={{ gap: "30px" }}>
					<SirenCard />
					<SirenCard />
					<SirenCard />
				</Flex>
			</Flex>
		</section>
	);
};

export default Bio;
