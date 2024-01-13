import { Flex, Heading } from "@/components/common";

import { sectionStyle, textStyle } from "@/components/Landing/Bio/Bio.style";

const Bio = () => {
	return (
		<section css={sectionStyle}>
			<Flex styles={{ justify: "center", align: "center", height: "100%" }}>
				<Heading css={textStyle}>와글과 함께 꼬리를 흔들어요 왕왕!</Heading>
			</Flex>
		</section>
	);
};

export default Bio;
