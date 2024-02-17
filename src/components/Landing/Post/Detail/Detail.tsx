import SampleImg from "@/assets/png/post-sample2.png";

import { Flex, Box, Divider, Text } from "@/components/common";
import Comment from "@/components/Landing/Post/Detail/Comment";

import { useCommentQuery } from "@/hooks/api/useCommentQuery";
import { useStoryQuery } from "@/hooks/api/useStoryQuery";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	layoutStyle,
	imgStyle,
	profileStyle,
	contentBoxStyle,
	commentLayoutStyle,
} from "@/components/Landing/Post/Detail/Detail.style";

interface idType {
	id: number;
}

const Detail = ({ id }: idType) => {
	const { storyData } = useStoryQuery(id);

	const { commentData } = useCommentQuery(0, id);

	const imgIndex = 0;

	return (
		<>
			{storyData && (
				<Flex css={layoutStyle}>
					{/* 미디어 영역 */}
					<Flex
						styles={{
							width: "741px",
							height: "100%",
							borderRadius: "42px 0 0 42px",
							borderRight: "1px solid #d2d2d2",
						}}
					>
						<img src={storyData.result.medias[imgIndex]} alt="profileImg" css={imgStyle} />
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
							<Flex styles={{ gap: "10px", align: "center" }}>
								<img src={SampleImg} alt="profileImg" css={profileStyle} />
								<Text size="small" css={getDefaultTextStyle(Theme.color.input_text, 700)}>
									{storyData.result.username}
								</Text>
							</Flex>

							{/* 콘텐츠 본문 영역 */}
							<Box css={contentBoxStyle}>
								<Text css={getDefaultTextStyle(Theme.color.input_text, 500)}>
									{storyData.result.content}
								</Text>
							</Box>

							{/* 게시 날짜 영역 */}
							<Flex styles={{ justify: "flex-end", width: "100%" }}>
								<Text size="xSmall" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
									{storyData.result.createdDate}
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
										username={comment.username}
									/>
								))}
						</Box>

						<Divider length="309px" />
					</Flex>
				</Flex>
			)}
		</>
	);
};

export default Detail;
