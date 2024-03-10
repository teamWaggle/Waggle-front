import { useState } from "react";

import { Flex, Box, Text, SearchInput } from "@/components/common";
import SortButton from "@/components/Landing/SortButton/SortButton";

import { SIREN_TAG_CATEGORY } from "@/constants/siren";

import { Theme } from "@/styles/Theme";

import { sectionStyle, tagStyle } from "@/components/Siren/Title/Title.style";

const Title = () => {
	const [tagName, setTagName] = useState("강아지 찾아요");

	return (
		<Box tag="section" css={sectionStyle}>
			<Flex styles={{ justify: "space-between", align: "center" }}>
				<Flex styles={{ gap: "22px" }}>
					<Flex styles={{ gap: "10px" }}>
						<SortButton defaultText="인기순" />
						<SortButton defaultText="해결" />
					</Flex>

					<Flex styles={{ gap: "14px" }}>
						{SIREN_TAG_CATEGORY.map((tag) => (
							<Flex
								key={tag.tagName}
								css={tagStyle(tagName === tag.tagName ? tag.color : Theme.color.border)}
								onClick={() => setTagName(tag.tagName)}
							>
								<Text>{tag.tagName}</Text>
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
