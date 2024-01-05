import { Flex, Box, Divider } from "@components/common";

import { layoutStyle } from "./Detail.style";

import Title from "./Title/Title";
import Content from "./Content/Content";
import Comment from "./Comment/Comment";

const Detail = () => {
	return (
		<Box tag="main">
			<Flex styles={{ direction: "column" }} css={layoutStyle}>
				<Title />
				<Divider />
				<Content />
			</Flex>
			<Divider />

			<Comment />
		</Box>
	);
};

export default Detail;
