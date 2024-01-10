import SampleImg from "@assets/png/post-sample2.png";

import { Flex, Text } from "@/components/common";
import { profileStyle, infoBoxStyle, contentStyle } from "./Detail.style";

import type { CommentListInfoType } from "@/types/comment";

const Comment = ({ username, content }: CommentListInfoType) => {
	return (
		<Flex styles={{ gap: "8px", marginTop: "20px", padding: "0 16px" }}>
			<img src={SampleImg} alt="profileImg" css={profileStyle} />
			<Flex styles={{ direction: "column" }} css={infoBoxStyle}>
				<Text size="xSmall" css={contentStyle}>
					{username}
				</Text>
				<Text size="small" css={contentStyle}>
					{content}
				</Text>
			</Flex>
		</Flex>
	);
};

export default Comment;
