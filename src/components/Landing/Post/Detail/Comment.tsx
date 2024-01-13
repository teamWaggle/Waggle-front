import SampleImg from "@/assets/png/post-sample2.png";
import { Flex, Text } from "@/components/common";

import type { CommentListInfoType } from "@/types/comment";

import {
	profileStyle,
	infoBoxStyle,
	contentStyle,
} from "@/components/Landing/Post/Detail/Detail.style";

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
