import SampleImg from "@/assets/png/post-sample2.png";

import { Flex, Box, Text } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { CommentListInfoType } from "@/types/comment";

import {
	profileStyle,
	commentTextStyle,
	commentBoxStyle,
} from "@/components/Landing/Post/Detail/Detail.style";

const Comment = ({ username, content }: CommentListInfoType) => {
	return (
		<Flex styles={{ direction: "column", padding: "0 30px 0 18px", marginTop: "20px" }}>
			<Flex styles={{ gap: "10px", align: "center" }}>
				<img src={SampleImg} alt="profileImg" css={profileStyle} />
				<Text size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
					{username}
				</Text>
			</Flex>

			<Box css={commentBoxStyle}>
				<Text size="small" css={commentTextStyle}>
					{content}
				</Text>
			</Box>

			<Flex styles={{ align: "center", gap: "12px", paddingLeft: "43px" }}>
				<Text size="xSmall" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
					2024.01.07
				</Text>
				<Text size="xSmall" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
					답글
				</Text>
			</Flex>
		</Flex>
	);
};

export default Comment;
