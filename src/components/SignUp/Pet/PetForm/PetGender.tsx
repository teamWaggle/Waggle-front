import FeMaleDisabledIcon from "@/assets/svg/ic-female-disabled.svg?react";
import FeMaleIcon from "@/assets/svg/ic-female.svg?react";
import MaleDisabledIcon from "@/assets/svg/ic-male-disabled.svg?react";
import MaleIcon from "@/assets/svg/ic-male.svg?react";

import { Flex, Text } from "@/components/common";

import { getFormTextStyle } from "@/components/SignUp/SignUp.shared.style";

const PetGender = ({
	gender,
	changeGender,
}: {
	gender: string;
	changeGender: React.Dispatch<React.SetStateAction<string>>;
}) => {
	return (
		<Flex styles={{ direction: "column", gap: "4px" }}>
			<Text css={getFormTextStyle(false)}>강아지 성별</Text>
			<Flex styles={{ gap: "16px", height: "44px", align: "center" }}>
				{gender === "FEMALE" ? (
					<FeMaleIcon onClick={() => changeGender("FEMALE")} />
				) : (
					<FeMaleDisabledIcon onClick={() => changeGender("FEMALE")} />
				)}

				{gender === "MALE" ? (
					<MaleIcon onClick={() => changeGender("MALE")} />
				) : (
					<MaleDisabledIcon onClick={() => changeGender("MALE")} />
				)}
			</Flex>
		</Flex>
	);
};

export default PetGender;
