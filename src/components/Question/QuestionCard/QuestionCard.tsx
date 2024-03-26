import LikeIcon from "@/assets/svg/question-like.svg?react";

import { Flex, Box, Heading, Text } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	cardStyle,
	resolveStyle,
	kewordBoxStyle,
	contentBoxStyle,
	iconStyle,
} from "@/components/Question/QuestionCard/QuestionCard.style";

const QuestionCard = () => {
	return (
		<Flex css={cardStyle}>
			<Flex styles={{ gap: "16px", align: "center" }}>
				<Flex css={resolveStyle}>해결</Flex>
				<Heading size="small" css={getDefaultTextStyle(Theme.color.black, 700)}>
					프리랜서의 성공 비결:시간 관리와 자기관리
				</Heading>
			</Flex>

			<Flex css={kewordBoxStyle}>
				<p>#핵심키워드1</p>
				<p>#핵심키워드1</p>
				<p>#핵심키워드1</p>
				<p>#핵심키워드1</p>
			</Flex>

			<Box css={contentBoxStyle}>
				<Text>
					딴은 밤을 세워 우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다. 나는 무엇인지 그리워 이
					많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다. 딴은 밤을 세워
					우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다 흙으로 덮어 버리었읍니다. 딴은 밤을 세워
					우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다
				</Text>
			</Box>

			<Flex css={iconStyle}>
				<LikeIcon />
				<Text css={getDefaultTextStyle(Theme.color.brand_primary, 500)}>45</Text>
			</Flex>
		</Flex>
	);
};

export default QuestionCard;
