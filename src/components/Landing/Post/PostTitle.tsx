import LogIcon from "@/assets/svg/log.svg?react";
import { Flex, Heading } from "@/components/common";
import { SortButton } from "@/components/Landing";

import { headingStyle } from "@/components/Landing/Post/Post.style";

const PostTitle = () => {
	return (
		<Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
			<Heading size="large" css={headingStyle}>
				Waggle LOG
				<LogIcon />
			</Heading>
			<SortButton defaultText="인기순" />
		</Flex>
	);
};

export default PostTitle;
