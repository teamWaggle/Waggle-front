import { Flex, Box, Divider } from "@components/common";

import { layoutStyle } from "./Detail.style";

import Title from "./Title/Title";
import Content from "./Content/Content";

const Detail = () => {
	return (
		<Box tag="main">
			<Flex styles={{ direction: "column" }} css={layoutStyle}>
				<Title />
				<Divider />
				<Content />
			</Flex>
			<Divider />
		</Box>
	);
};

export default Detail;
