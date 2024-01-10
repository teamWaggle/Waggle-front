import SampleImg from "@assets/png/post-sample2.png";

import { Flex, Divider, Text } from "@/components/common";

import Comment from "./Comment";

import { layoutStyle, imgStyle, profileStyle, infoBoxStyle, contentStyle } from "./Detail.style";

import { useStoryQuery } from "@hooks/api/useStoryQuery";
import { useCommentQuery } from "@/hooks/api/useCommentQuery";

import { StoryResultType } from "@/types/story";

const Detail = ({ id }: StoryResultType) => {
	const { storyData } = useStoryQuery(id);

	const { commentData } = useCommentQuery(0, id);

	return (
		<>
			{storyData && (
				<Flex css={layoutStyle}>
					<Flex styles={{ width: "741px", height: "100%", borderRadius: "42px 0 0 42px" }}>
						<img src={SampleImg} alt="profileImg" css={imgStyle} />
					</Flex>

					<Flex styles={{ direction: "column" }}>
						<Flex styles={{ direction: "column", padding: "36px 16px" }}>
							<Flex styles={{ gap: "8px" }}>
								<img src={SampleImg} alt="profileImg" css={profileStyle} />
								<Flex styles={{ direction: "column" }} css={infoBoxStyle}>
									<Text size="xSmall" css={contentStyle}>
										{storyData.result.username}
									</Text>
									<Text size="small" css={contentStyle}>
										{storyData.result.content}
									</Text>
								</Flex>
							</Flex>
						</Flex>
						<Divider length="309px" />
						{commentData &&
							commentData.result.commentList.map((comment) => (
								<Comment key={comment.id} {...comment} />
							))}
					</Flex>
				</Flex>
			)}
		</>
	);
};

export default Detail;