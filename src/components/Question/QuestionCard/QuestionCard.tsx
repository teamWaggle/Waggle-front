import DisLikeIcon from "@/assets/svg/ic-question-dislike.svg?react";
import LikeIcon from "@/assets/svg/ic-question-like.svg?react";

import { Flex, Box, Heading, Text } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { QuestionListInfoType } from "@/types/question";

import {
	cardStyle,
	resolveStyle,
	kewordBoxStyle,
	contentBoxStyle,
	iconStyle,
} from "@/components/Question/QuestionCard/QuestionCard.style";

const QuestionCard = ({
	// boardId,
	title,
	// createdDate,
	hashtagList,
	status,
	recommendationInfo,
}: QuestionListInfoType) => {
	return (
		<Flex css={cardStyle}>
			<Flex styles={{ gap: "16px", align: "center" }}>
				<Flex css={resolveStyle(status === "RESOLVED")}>
					{status === "RESOLVED" ? "해결" : "미해결"}
				</Flex>
				<Heading size="small" css={getDefaultTextStyle(Theme.color.black, 700)}>
					{title}
				</Heading>
			</Flex>

			<Flex css={kewordBoxStyle}>
				{hashtagList && hashtagList.map((tag) => <p key={tag}>#{tag}</p>)}
			</Flex>

			<Box css={contentBoxStyle}>
				<Text>
					딴은 밤을 세워 우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다. 나는 무엇인지 그리워 이
					많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다. 딴은 밤을 세워
					우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다 흙으로 덮어 버리었읍니다. 딴은 밤을 세워
					우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다
				</Text>
			</Box>
			{recommendationInfo && (
				<Flex css={iconStyle}>
					{recommendationInfo.isRecommend ? <LikeIcon /> : <DisLikeIcon />}

					<Text
						css={getDefaultTextStyle(
							recommendationInfo.isRecommend ? Theme.color.brand_primary : Theme.color.btn_success,
							500,
						)}
					>
						{recommendationInfo.recommendCount}
					</Text>
				</Flex>
			)}
		</Flex>
	);
};

export default QuestionCard;
