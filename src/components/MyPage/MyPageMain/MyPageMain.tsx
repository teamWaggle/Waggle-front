import { useRecoilState } from "recoil";

import { Flex, Box, Heading } from "@/components/common";
import MyPagePetCard from "@/components/MyPage/MyPageMain/MyPagePetCard/MyPagePetCard";
import PetAddModal from "@/components/MyPage/MyPageMain/PetAddModal/PetAddModal";

import { usePetQuery } from "@/hooks/api/pet/usePetQuery";
import useModal from "@/hooks/useModal";

import { memberIdState } from "@/recoil/atoms/auth";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { MemberIdType } from "@/types/common";

import {
	layoutStyle,
	petCardBoxStyle,
	buttonStyle,
} from "@/components/MyPage/MyPageMain/MyPageMain.style";

const MyPageMain = ({ memberId }: MemberIdType) => {
	const [userId] = useRecoilState(memberIdState);

	const { petData } = usePetQuery(memberId);

	const modal = useModal();

	const handlePetAdd = () => {
		modal.openModal({
			key: "PetAddModal",
			component: () => <PetAddModal />,
		});
	};

	return (
		<Box tag="main" css={layoutStyle}>
			<Flex styles={{ justify: "space-between", align: "center" }}>
				<Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
					반려견 소개
				</Heading>
				<button css={buttonStyle} onClick={handlePetAdd}>
					반려견 추가
				</button>
			</Flex>

			<Flex css={petCardBoxStyle}>
				{petData.result.map((petInfo) => (
					<MyPagePetCard
						key={petInfo.petId}
						profileImgUrl={petInfo.profileImgUrl}
						gender={petInfo.gender}
						name={petInfo.name}
						petId={petInfo.petId}
						isOwner={memberId === userId}
					/>
				))}
			</Flex>
		</Box>
	);
};

export default MyPageMain;
