import FeMaleIcon from "@/assets/svg/ic-female.svg?react";
import MaleIcon from "@/assets/svg/ic-male.svg?react";

import { Flex, Heading, Text } from "@/components/common";

import type { PetResultType } from "@/types/pet";

import {
	petCardStyle,
	petInfoBoxStyle,
} from "@/components/MyPage/MyPagePetCard/MyPagePetCard.style";

const MyPagePetCard = ({ profileImgUrl, gender, name, petId }: PetResultType) => {
	console.log(petId);

	return (
		<Flex css={petCardStyle}>
			<img src={profileImgUrl} alt="petImg" />

			<Flex css={petInfoBoxStyle}>
				<Flex styles={{ align: "center", gap: "6px" }}>
					{gender === "MALE" ? <MaleIcon /> : <FeMaleIcon />}

					<Heading size="xSmall">{name}</Heading>
				</Flex>
				<Text>
					<span>시고르자브종</span>
					<span>2살</span>
				</Text>
				<Text>반려견 소개가 입력되지 않았습니다.</Text>
			</Flex>
		</Flex>
	);
};

export default MyPagePetCard;
