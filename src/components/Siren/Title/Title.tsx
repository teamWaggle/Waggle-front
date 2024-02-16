import { useState } from "react";

import SearchButtonIcon from "@/assets/svg/search-button.svg?react";

import { Flex, Box, Text } from "@/components/common";
import SortButton from "@/components/Landing/SortButton/SortButton";

import {
	sectionStyle,
	tagStyle,
	tagDisabledStyle,
	searchStyle,
	inputStyle,
	buttonStyle,
} from "@/components/Siren/Title/Title.style";

const tagItems = [
	{
		title: "임시보호",
	},
	{
		title: "강아지 찾아요",
	},
	{
		title: "주인 찾아요",
	},
	{
		title: "기타",
	},
];

const Title = () => {
	const [tagName, setTagName] = useState("임시보호");

	return (
		<Box tag="section" css={sectionStyle}>
			<Flex styles={{ justify: "space-between", align: "center" }}>
				<Flex styles={{ gap: "22px" }}>
					<Flex styles={{ gap: "10px" }}>
						<SortButton defaultText="인기순" />
						<SortButton defaultText="해결" />
					</Flex>
					<Flex styles={{ gap: "14px" }}>
						{tagItems.map((data) => (
							<Flex
								styles={{ justify: "center", align: "center" }}
								css={data.title === tagName ? tagStyle : tagDisabledStyle}
								key={data.title}
								onClick={() => setTagName(data.title)}
							>
								<Text>{data.title}</Text>
							</Flex>
						))}
					</Flex>
				</Flex>
				<Flex styles={{ align: "center" }} css={searchStyle}>
					<input css={inputStyle} />
					<Flex tag="button" styles={{ align: "center", justify: "center" }} css={buttonStyle}>
						<SearchButtonIcon />
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Title;
