import LogIcon from "@/assets/svg/log.svg?react";

import { Flex, Heading, Text } from "@/components/common";
import { SortButton } from "@/components/Landing";

import { headingStyle, buttonStyle } from "@/components/Landing/Post/Post.style";

const PostTitle = () => {
	return (
		<Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
			<Flex styles={{ align: "center", gap: "20px" }}>
				<Heading size="large" css={headingStyle}>
					Waggle LOG
					<LogIcon />
				</Heading>
				<button type="button" css={buttonStyle}>
					<Text size="xLarge">글 작성하기</Text>
				</button>
			</Flex>

			<SortButton defaultText="인기순" />
		</Flex>
	);
};

export default PostTitle;
