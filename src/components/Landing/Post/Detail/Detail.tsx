import SampleImg from "@/assets/png/post-sample2.png";

import { Flex, Divider, Text } from "@/components/common";
import Comment from "@/components/Landing/Post/Detail/Comment";

import { useCommentQuery } from "@/hooks/api/useCommentQuery";
import { useStoryQuery } from "@/hooks/api/useStoryQuery";

import {
	layoutStyle,
	imgStyle,
	profileStyle,
	infoBoxStyle,
	contentStyle,
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
					<Flex styles={{ width: "741px", height: "100%", borderRadius: "42px 0 0 42px" }}>
						<img src={storyData.result.medias[imgIndex]} alt="profileImg" css={imgStyle} />
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
