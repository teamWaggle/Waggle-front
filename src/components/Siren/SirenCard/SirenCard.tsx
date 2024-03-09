import { useNavigate } from "react-router-dom";

import SirenOnIcon from "@/assets/svg/siren-on.svg?react";

import { Flex, Heading, Text } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { SirenListInfoType } from "@/types/siren";

import {
	cardStyle,
	dateStyle,
	imgStyle,
	infoStyle,
	subStyle,
	textStyle,
} from "@/components/Siren/SirenCard/SirenCard.style";

const SirenCard = ({
	boardId,
	thumbnail,
	title,
	lostLocate,
	lostDate,
	recommendationInfo,
}: SirenListInfoType) => {
	const navigate = useNavigate();

	return (
		<Flex
			styles={{ direction: "column" }}
			css={cardStyle}
			onClick={() => navigate(`/siren/view/${boardId}`)}
		>
			<img src={thumbnail} alt="thumbnail" css={imgStyle} />
			<Flex styles={{ direction: "column" }} css={infoStyle}>
				<Heading size="xSmall" css={getDefaultTextStyle(Theme.color.brand_primary, 700)}>
					{title}
				</Heading>

				<Text css={subStyle}>{lostLocate}</Text>

				<Flex
					styles={{
						justify: "space-between",
						align: "flex-end",
						marginTop: "16px",
						width: "100%",
					}}
				>
					<Flex styles={{ align: "flex-end" }}>
						<SirenOnIcon />
						<Text size="xSmall" css={textStyle}>
							{recommendationInfo.recommendCount}
						</Text>
					</Flex>
					<Text size="xSmall" css={dateStyle}>
						{lostDate}
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default SirenCard;
