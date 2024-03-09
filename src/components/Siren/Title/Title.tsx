import { useState } from "react";

import { Flex, Box, Text, SearchInput } from "@/components/common";
import SortButton from "@/components/Landing/SortButton/SortButton";

import { sectionStyle, tagStyle } from "@/components/Siren/Title/Title.style";

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
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
							<Flex css={tagStyle("red")} key={data.title} onClick={() => setTagName(data.title)}>
								<Text>{data.title}</Text>
							</Flex>
						))}
					</Flex>
				</Flex>

				<SearchInput onChange={() => {}} width="508px" />
			</Flex>
		</Box>
	);
};

export default Title;
