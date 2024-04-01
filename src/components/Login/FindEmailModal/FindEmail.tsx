import { Flex, Text } from "@/components/common";
import Birthday from "@/components/common/BirthDay/Birthday";

import { useFindEmailForm } from "@/hooks/auth/useFindEmailForm";

import {
	formTextStyle,
	inputStyle,
	buttonStyle,
} from "@/components/Login/FindEmailModal/FindEmailModal.style";

const FindEmail = () => {
	const {
		selectOpen,
		handleSelectOpen,
		birthdayRequest,
		updateBirthdayValue,
		updateNameValue,
		handleSubmit,
		name,
		nameRef,
	} = useFindEmailForm();

	return (
		<>
			<Flex styles={{ direction: "column", gap: "20px" }}>
				<Flex styles={{ direction: "column", gap: "8px" }}>
					<Text css={formTextStyle}>이름</Text>
					<input
						css={inputStyle}
						placeholder="이름을 입력해주세요"
						value={name.value}
						ref={nameRef}
						onChange={(e) => updateNameValue("value", e.target.value)}
					/>
				</Flex>

				<Birthday
					selectOpen={selectOpen}
					handleSelectOpen={handleSelectOpen}
					birthdayRequest={birthdayRequest}
					updateBirthdayValue={updateBirthdayValue}
				/>
			</Flex>
			<button css={buttonStyle} onClick={handleSubmit}>
				인증하기
			</button>
		</>
	);
};

export default FindEmail;
