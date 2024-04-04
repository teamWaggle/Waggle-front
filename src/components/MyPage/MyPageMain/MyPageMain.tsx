import { Flex, Box, Heading } from "@/components/common";
import MyPagePetCard from "@/components/MyPage/MyPagePetCard/MyPagePetCard";

import { usePetQuery } from "@/hooks/api/pet/usePetQuery";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { MemberIdType } from "@/types/common";

import { layoutStyle, petCardBoxStyle } from "@/components/MyPage/MyPageMain/MyPageMain.style";

const MyPageMain = ({ memberId }: MemberIdType) => {
	const { petData } = usePetQuery(memberId);

	return (
		<Box tag="main" css={layoutStyle}>
			<Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
				반려견 소개
			</Heading>

			<Flex css={petCardBoxStyle}>
				{petData.result.map((petInfo) => (
					<MyPagePetCard
						key={petInfo.petId}
						profileImgUrl={petInfo.profileImgUrl}
						gender={petInfo.gender}
						name={petInfo.name}
						petId={petInfo.petId}
					/>
				))}
			</Flex>
		</Box>
	);
};

export default MyPageMain;
