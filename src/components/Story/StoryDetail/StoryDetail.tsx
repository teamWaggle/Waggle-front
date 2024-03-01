import { useState, useEffect } from "react";

import HeartEmptyIcon from "@/assets/svg/ic-heart-empty.svg?react";

import { Flex, Box, Divider, Text } from "@/components/common";
import Comment from "@/components/Story/StoryDetail/Comment";
import Profile from "@/components/Story/StoryDetail/Profile";
import StoryImgSlider from "@/components/Story/StoryDetail/StoryImgSlider";

import { useCommentQuery } from "@/hooks/api/useCommentQuery";
import { useStoryQuery } from "@/hooks/api/useStoryQuery";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { convertToUTC } from "@/utils/convertToUTC";

import {
	layoutStyle,
	contentBoxStyle,
	commentLayoutStyle,
	getReplyInputStyle,
	replyButtonStyle,
} from "@/components/Story/StoryDetail/StoryDetail.style";

interface idType {
	id: number;
}

const StoryDetail = ({ id }: idType) => {
	const { storyData } = useStoryQuery(id);

	const { commentData } = useCommentQuery(0, id);

	const [createdDate, setCreatedDate] = useState("");

	useEffect(() => {
		if (storyData) {
			const date = new Date(storyData.result.createdDate);

			setCreatedDate(convertToUTC(date).date);
		}
	}, [storyData]);

	return (
		<>
			{storyData && (
				<Flex css={layoutStyle}>
					{/* 미디어 영역 */}
					<Flex
						styles={{
							width: "741px",
							height: "100%",
							borderRight: "1px solid #d2d2d2",
						}}
					>
						<StoryImgSlider medias={storyData.result.medias} />
					</Flex>

					{/* 본문 영역 */}
					<Flex styles={{ direction: "column" }}>
						<Flex
							styles={{
								direction: "column",
								padding: "52px 30px 12px 18px",
								gap: "12px",
								width: "100%",
							}}
						>
							{/* 프로필 영역 */}
							<Profile
								img={storyData.result.member.profileImgUrl}
								nickname={storyData.result.member.nickname}
							/>

							{/* 콘텐츠 본문 영역 */}
							<Box css={contentBoxStyle}>
								<Text css={getDefaultTextStyle(Theme.color.input_text, 500)}>
									{storyData.result.content}
								</Text>
							</Box>
							{/* 게시 날짜 영역 */}
							<Flex styles={{ justify: "flex-end", width: "100%" }}>
								<Text size="xSmall" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
									{createdDate}
								</Text>
							</Flex>
						</Flex>

						{/* 구분선 */}
						<Divider length="309px" />

						{/* 코멘트 영역 */}
						<Box css={commentLayoutStyle}>
							{commentData &&
								commentData.result.commentList.map((comment) => (
									<Comment
										key={comment.id}
										id={comment.id}
										content={comment.content}
										createdDate={comment.createdDate}
										member={comment.member}
									/>
								))}
						</Box>

						<Divider length="309px" />

						{/* 코멘트 작성 영역 */}
						<Flex styles={{ direction: "column", gap: "10px", padding: "15px 24px" }}>
							<Flex styles={{ align: "center", gap: "2px" }}>
								<HeartEmptyIcon />
								<Text size="small" css={getDefaultTextStyle(Theme.color.disabled_text, 600)}>
									{storyData.result.recommendCount}
								</Text>
							</Flex>

							<Box styles={{ position: "relative" }}>
								<input type="text" css={getReplyInputStyle("260px")} placeholder="답글 작성" />
								<button type="submit" css={replyButtonStyle}>
									등록
								</button>
							</Box>
						</Flex>
					</Flex>
				</Flex>
			)}
		</>
	);
};

export default StoryDetail;