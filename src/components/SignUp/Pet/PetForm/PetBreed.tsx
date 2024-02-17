import { Flex, Text } from "@/components/common";

import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

const PetBreed = ({
	breed,
	changeBreed,
}: {
	breed: string;
	changeBreed: React.Dispatch<React.SetStateAction<string>>;
}) => {
	return (
		<Flex styles={{ direction: "column", gap: "4px" }}>
			<Text css={getFormTextStyle(true)}>강아지 종</Text>
			<input
				css={getInputStyle("444px")}
				placeholder="강아지종을 입력해주세요"
				value={breed}
				onChange={(e) => changeBreed(e.target.value)}
			/>
		</Flex>
	);
};

export default PetBreed;
