import { useNavigate } from "react-router-dom";

import SirenOnIcon from "@/assets/svg/siren-on.svg?react";
import { Flex, Heading, Text } from "@/components/common";

import type { SirenListInfoType } from "@/types/siren";

import {
	cardStyle,
	dateStyle,
	imgStyle,
	infoStyle,
	subStyle,
	textStyle,
	titleStyle,
} from "@/components/Siren/SirenCard/SirenCard.style";

const SirenCard = ({
	id,
	thumbnail,
	title,
	lostLocate,
	recommendCount,
	lostDate,
}: SirenListInfoType) => {
	const navigate = useNavigate();

	return (
		<Flex
			styles={{ direction: "column" }}
			css={cardStyle}
			onClick={() => navigate(`/siren/view/${id}`)}
		>
			<img src={thumbnail} alt="thumbnail" css={imgStyle} />
			<Flex styles={{ direction: "column" }} css={infoStyle}>
				<Heading size="xSmall" css={titleStyle}>
					{title}
				</Heading>
				<Text css={subStyle}>{lostLocate}</Text>
				<Flex
					styles={{
						justify: "space-between",
						align: "flex-end",
						marginTop: "36px",
						width: "100%",
					}}
				>
					<Flex styles={{ align: "flex-end" }}>
						<SirenOnIcon />
						<Text size="xSmall" css={textStyle}>
							{recommendCount}
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
