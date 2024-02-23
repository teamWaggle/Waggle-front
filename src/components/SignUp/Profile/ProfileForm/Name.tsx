import RequiredIcon from "@/assets/svg/RequiredIcon.svg?react";

import { Flex, Text } from "@/components/common";

import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

const Name = ({
	name,
	changeName,
	nameRef,
}: {
	name: string;
	changeName: React.Dispatch<React.SetStateAction<string>>;
	nameRef: React.RefObject<HTMLInputElement>;
}) => {
	return (
		<Flex styles={{ direction: "column", gap: "8px" }}>
			<Flex styles={{ gap: "4px", align: "center" }}>
				<Text css={getFormTextStyle(true)}>이름(실명)</Text>
				<RequiredIcon />
			</Flex>
			<input
				css={getInputStyle("444px")}
				placeholder="이름을 입력해주세요"
				value={name}
				onChange={(e) => changeName(e.target.value)}
				ref={nameRef}
			/>
		</Flex>
	);
};

export default Name;
