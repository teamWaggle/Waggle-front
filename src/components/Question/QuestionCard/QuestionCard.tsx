import Flex from "@components/common/Flex/Flex";

import {
	cardStyle,
	resolveStyle,
	titleStyle,
	tagStyle,
	contentStyle,
	iconStyle,
	iconTextStyle,
} from "./QuestionCard.style";

import LikeIcon from "@assets/svg/question-like.svg?react";

const QuestionCard = () => {
	return (
		<Flex styles={{ direction: "column", gap: "14px" }} css={cardStyle}>
			<Flex styles={{ gap: "16px" }}>
				<Flex styles={{ align: "center", justify: "center" }} css={resolveStyle} tag="span">
					해결
				</Flex>
				<h2 css={titleStyle}>프리랜서의 성공 비결:시간 관리와 자기관리</h2>
			</Flex>
			<Flex styles={{ gap: "18px" }}>
				<p css={tagStyle}>#핵심키워드1</p>
				<p css={tagStyle}>#핵심키워드1</p>
				<p css={tagStyle}>#핵심키워드1</p>
				<p css={tagStyle}>#핵심키워드1</p>
			</Flex>
			<p css={contentStyle}>
				딴은 밤을 세워 우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다. 나는 무엇인지 그리워 이 많은
				별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다. 딴은 밤을 세워 우는
				벌레는 부끄러운 이름을 슬퍼하는 까닭입니다
			</p>
			<Flex
				styles={{
					direction: "column",
					justify: "center",
					align: "center",
					gap: "8px",
				}}
				css={iconStyle}
			>
				<LikeIcon />
				<span css={iconTextStyle}>45</span>
			</Flex>
		</Flex>
	);
};

export default QuestionCard;
