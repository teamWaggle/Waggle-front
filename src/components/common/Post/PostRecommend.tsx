import RecommendOffIcon from "@/assets/svg/ic-recommend-off.svg?react";
import RecommendOnIcon from "@/assets/svg/ic-recommend-on.svg?react";

import { Flex, Heading } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

const PostRecommend = ({
	isRecommend,
	recommendCount,
}: {
	isRecommend: boolean;
	recommendCount: number;
}) => {
	return (
		<Flex styles={{ align: "center", justify: "center", width: "100%" }}>
			<Flex styles={{ align: "center", gap: "22px" }}>
				{isRecommend ? <RecommendOnIcon /> : <RecommendOffIcon />}

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
