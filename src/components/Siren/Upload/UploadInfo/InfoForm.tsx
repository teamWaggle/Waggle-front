import FeMaleDisabledIcon from "@/assets/svg/ic-female-disabled.svg?react";
import FeMaleIcon from "@/assets/svg/ic-female.svg?react";
import MaleDisabledIcon from "@/assets/svg/ic-male-disabled.svg?react";
import MaleIcon from "@/assets/svg/ic-male.svg?react";

import { Flex, Box, Text } from "@/components/common";

import { textStyle, inputStyle } from "@/components/Siren/Upload/UploadInfo/InfoForm.style";

interface InfoFormProps {
	title: string;
	value: string;
	changeValue: React.Dispatch<React.SetStateAction<string>>;
}

const InfoForm = ({ title, value, changeValue }: InfoFormProps) => {
	return (
		<Box styles={{ width: "333px" }}>
			<Text size="xLarge" css={textStyle}>
				{title}
			</Text>

			{title !== "성별" ? (
				<input
					type="text"
					placeholder="강아지 보호중인 장소"
					css={inputStyle}
					value={value}
					onChange={(e) => changeValue(e.target.value)}
				/>
			) : (
				<Flex styles={{ gap: "10px" }}>
					{value === "FEMALE" ? (
						<FeMaleIcon onClick={() => changeValue("FEMALE")} />
					) : (
						<FeMaleDisabledIcon onClick={() => changeValue("FEMALE")} />
					)}

					{value === "MALE" ? (
						<MaleIcon onClick={() => changeValue("MALE")} />
					) : (
						<MaleDisabledIcon onClick={() => changeValue("MALE")} />
					)}
				</Flex>
			)}
		</Box>
	);
};

export default InfoForm;
