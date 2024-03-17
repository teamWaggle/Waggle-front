import { useNavigate } from "react-router-dom";

import SirenOffIcon from "@/assets/svg/ic-siren-off.svg?react";
import SirenOnIcon from "@/assets/svg/ic-siren-on.svg?react";

import { Flex, Heading, Text } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { generateTagStyle, generateTagName } from "@/utils/generateTag";

import type { SirenListInfoType } from "@/types/siren";

import {
	cardStyle,
	tagBoxStyle,
	tagStyle,
	infoStyle,
	subStyle,
	textStyle,
	bottomBoxStyle,
} from "@/components/Siren/SirenCard/SirenCard.style";

const SirenCard = ({
	boardId,
	thumbnail,
	title,
	lostLocate,
	recommendationInfo,
	category,
	status,
	createdDate,
}: SirenListInfoType) => {
	const navigate = useNavigate();

	return (
		<Flex css={cardStyle} onClick={() => navigate(`/siren/view/${boardId}`)}>
			<Flex css={tagBoxStyle}>
				<Flex css={tagStyle(generateTagStyle(category))}>
					<Text>{generateTagName(category)}</Text>
				</Flex>

				<Flex
					css={tagStyle(status === "RESOLVED" ? Theme.color.btn_success : Theme.color.btn_danger)}
				>
					<Text>{status === "RESOLVED" ? "해결" : "미해결"}</Text>
				</Flex>
			</Flex>

			<img src={thumbnail} alt="thumbnail" />
			<Flex css={infoStyle}>
				<Heading size="xSmall" css={getDefaultTextStyle(Theme.color.brand_primary, 700)}>
					{title}
				</Heading>

				<Text css={subStyle}>{lostLocate}</Text>

				<Flex css={bottomBoxStyle}>
					<Flex styles={{ gap: "2px" }}>
						{recommendationInfo.isRecommend ? <SirenOnIcon /> : <SirenOffIcon />}

						<Text size="xSmall" css={textStyle(recommendationInfo.isRecommend)}>
							{recommendationInfo.recommendCount}
						</Text>
					</Flex>

					<Text size="xSmall" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
						{createdDate}
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default SirenCard;
