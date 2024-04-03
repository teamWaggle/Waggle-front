import { useNavigate } from "react-router-dom";

// import SirenOffIcon from "@/assets/svg/ic-siren-off.svg?react";
import SirenOnIcon from "@/assets/svg/ic-siren-on.svg?react";

import { Flex, Heading, Text } from "@/components/common";
import Tag from "@/components/common/Tag/Tag";

import { PATH } from "@/constants/path";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { convertToUTC } from "@/utils/convertToUTC";

import type { SirenListInfoType } from "@/types/siren";

import {
	cardStyle,
	tagBoxStyle,
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
	recommendCount,
	category,
	status,
	createdDate,
	isMyPage,
}: SirenListInfoType) => {
	const navigate = useNavigate();

	return (
		<Flex css={cardStyle(isMyPage)} onClick={() => navigate(PATH.SIREN_DETAIL(String(boardId)))}>
			<Flex css={tagBoxStyle}>
				<Tag tagText={category} />
				<Tag tagText={status} isResolveTag />
			</Flex>

			<img src={thumbnail} alt="thumbnail" />
			<Flex css={infoStyle}>
				<Heading size="xSmall" css={getDefaultTextStyle(Theme.color.brand_primary, 700)}>
					{title}
				</Heading>

				<Text css={subStyle}>{lostLocate}</Text>

				<Flex css={bottomBoxStyle}>
					<Flex styles={{ gap: "2px" }}>
						<SirenOnIcon />
						{/* <SirenOffIcon /> */}

						<Text size="xSmall" css={textStyle(true)}>
							{recommendCount}
						</Text>
					</Flex>

					<Text size="xSmall" css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>
						{convertToUTC(new Date(createdDate)).date}
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default SirenCard;
