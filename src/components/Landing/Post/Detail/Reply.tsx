import { css } from "@emotion/react";

import SampleImg from "@/assets/png/post-sample2.png";

import { Flex, Box, Text } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	profileStyle,
	getCommentTextStyle,
	commentBoxStyle,
	replyInputStyle,
	replyButtonStyle,
	handleReplyTextStyle,
} from "@/components/Landing/Post/Detail/Detail.style";

interface replyType {
	onClose: () => void;
}

const Reply = ({ onClose }: replyType) => {
	return (
		<Flex styles={{ direction: "column", paddingLeft: "43px", marginTop: "10px", gap: "10px" }}>
			<Flex styles={{ align: "center", gap: "6px" }}>
				<div css={dividerStyle} />
				<Text size="xSmall" css={handleReplyTextStyle} onClick={onClose}>
					답글 접기
				</Text>
			</Flex>

			<Flex styles={{ gap: "10px", align: "center" }}>
				<img src={SampleImg} alt="profileImg" css={profileStyle} />
				<Text size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
					고양아 멍멍해봐
				</Text>
			</Flex>

			<Box css={commentBoxStyle}>
				<Text size="small" css={getCommentTextStyle(true)}>
					강아지가 너무 귀엽네요 멍멍멍 멍강아지가 너무 귀엽네요 멍멍멍멍
				</Text>
			</Box>

			<Box styles={{ position: "relative" }}>
				<input type="text" css={replyInputStyle} placeholder="답글 작성" />
				<button type="submit" css={replyButtonStyle}>
					등록
				</button>
			</Box>
		</Flex>
	);
};

export default Reply;

export const dividerStyle = css({
	width: "12px",
	height: "1px",
	backgroundColor: Theme.color.border,
});
