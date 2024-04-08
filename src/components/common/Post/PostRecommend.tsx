import RecommendOffIcon from "@/assets/svg/ic-recommend-off.svg?react";
import RecommendOnIcon from "@/assets/svg/ic-recommend-on.svg?react";

import { Flex, Heading } from "@/components/common";

import { useGetIsRecommend } from "@/hooks/api/recommend/useGetIsRecommend";
import { usePostRecommend } from "@/hooks/api/recommend/usePostRecommend";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

interface PostRecommendParams {
	recommendCount: number;
	boardId: number;
}

const PostRecommend = ({ recommendCount, boardId }: PostRecommendParams) => {
	const isRecommend = useGetIsRecommend(boardId);

	const { mutate: postRecommend } = usePostRecommend();

	return (
		<Flex styles={{ align: "center", justify: "center", width: "100%" }}>
			<Flex styles={{ align: "center", gap: "22px" }}>
				{isRecommend ? (
					<RecommendOnIcon onClick={() => postRecommend(boardId)} />
				) : (
					<RecommendOffIcon onClick={() => postRecommend(boardId)} />
				)}

				<Heading
					size="xxLarge"
					css={getDefaultTextStyle(
						isRecommend ? Theme.color.brand_primary : Theme.color.border,
						500,
					)}
				>
					{recommendCount}
				</Heading>
			</Flex>
		</Flex>
	);
};

export default PostRecommend;
