import { Flex, Heading } from "@components/common";
import { headingStyle } from "@components/Landing/Post/Post.style";

const PostTitle = () => {
	return (
		<Flex styles={{ align: "center", justify: "space-between" }}>
			<Heading size="large" css={headingStyle}>
				Waggle LOG
			</Heading>
		</Flex>
	);
};

export default PostTitle;
