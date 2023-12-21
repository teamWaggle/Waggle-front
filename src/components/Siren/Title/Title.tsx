import { sectionStyle, tagStyle, searchStyle, inputStyle, buttonStyle } from "./Title.style";

import Flex from "@components/common/Flex/Flex";

import SortButton from "@/components/Landing/SortButton/SortButton";

import SearchButtonIcon from "@assets/svg/search-button.svg?react";

const tagItems = [
	{
		title: "전체",
	},
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
	return (
		<section css={sectionStyle}>
			<Flex styles={{ justify: "space-between", align: "center" }}>
				<Flex styles={{ gap: "16px" }}>
					<SortButton defaultText="인기순" />
					<SortButton defaultText="해결" />
				</Flex>
				<Flex styles={{ gap: "16px" }}>
					{tagItems.map((data) => (
						<Flex styles={{ justify: "center", align: "center" }} css={tagStyle} key={data.title}>
							{data.title}
						</Flex>
					))}
				</Flex>
				<Flex styles={{ align: "center" }} css={searchStyle}>
					<input css={inputStyle} />
					<button css={buttonStyle}>
						<SearchButtonIcon />
					</button>
				</Flex>
			</Flex>
		</section>
	);
};

export default Title;
