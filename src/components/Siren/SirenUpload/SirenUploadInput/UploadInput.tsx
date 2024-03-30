import FeMaleDisabledIcon from "@/assets/svg/ic-female-disabled.svg?react";
import FeMaleIcon from "@/assets/svg/ic-female.svg?react";
import MaleDisabledIcon from "@/assets/svg/ic-male-disabled.svg?react";
import MaleIcon from "@/assets/svg/ic-male.svg?react";

import { Flex, Box, Text } from "@/components/common";

import type { test } from "@/hooks/siren/useAddSirenForm";

import {
	textStyle,
	inputStyle,
} from "@/components/Siren/SirenUpload/SirenUploadInput/UploadInput.style";

interface InfoFormProps {
	valueKey: keyof test;
	title: string;
	placeholder?: string;
	value: string;
	updateInputValue: <Key extends keyof test>(key: Key, value: test[Key]) => void;
}

const UploadInput = ({ valueKey, title, placeholder, value, updateInputValue }: InfoFormProps) => {
	return (
		<Box styles={{ width: "333px" }}>
			<Text size="xLarge" css={textStyle}>
				{title}
			</Text>
			{title !== "성별" ? (
				<input
					type="text"
					placeholder={placeholder}
					css={inputStyle}
					value={value}
					onChange={(e) => updateInputValue(valueKey, e.target.value)}
				/>
			) : (
				<Flex styles={{ gap: "10px" }}>
					{value === "FEMALE" ? (
						<FeMaleIcon onClick={() => updateInputValue(valueKey, "FEMALE")} />
					) : (
						<FeMaleDisabledIcon onClick={() => updateInputValue(valueKey, "FEMALE")} />
					)}

					{value === "MALE" ? (
						<MaleIcon onClick={() => updateInputValue(valueKey, "MALE")} />
					) : (
						<MaleDisabledIcon onClick={() => updateInputValue(valueKey, "MALE")} />
					)}
				</Flex>
			)}
		</Box>
	);
};

export default UploadInput;
