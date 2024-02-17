import { css } from "@emotion/react";

import SampleImg from "@/assets/png/post-sample2.png";

import { Flex, Box, Text } from "@/components/common";
import Profile from "@/components/Landing/Post/PostDetail/Profile";

import { Theme } from "@/styles/Theme";

import {
	getCommentTextStyle,
	commentBoxStyle,
	getReplyInputStyle,
	replyButtonStyle,
	handleReplyTextStyle,
} from "@/components/Landing/Post/PostDetail/PostDetail.style";

interface replyType {
	id: number;
	content: string;
	username: string;
	onClose: () => void;
}

const Reply = ({ content, username, onClose }: replyType) => {
	return (
		<Flex
			styles={{
				direction: "column",
				paddingLeft: "43px",
				marginTop: "10px",
				gap: "10px",
				width: "100%",
			}}
		>
			<Flex styles={{ align: "center", gap: "6px" }}>
				<div css={dividerStyle} />
				<Text size="xSmall" css={handleReplyTextStyle} onClick={onClose}>
					답글 접기
				</Text>
			</Flex>

			{/* 프로필 영역 */}
			<Profile img={SampleImg} username={username} />

			<Box css={commentBoxStyle}>
				<Text size="small" css={getCommentTextStyle(true)}>
					{content}
				</Text>
			</Box>

			<Box styles={{ position: "relative" }}>
				<input type="text" css={getReplyInputStyle("215px")} placeholder="답글 작성" />
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
