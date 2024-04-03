import type { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";

import LeftArrowIcon from "@/assets/svg/left-arrow-brand-primary.svg?react";

import { Box, Flex, Form, Heading, Text } from "@/components/common";

import { TEAM_CONTENT, TEAM_DEFAULT_VALUES, TEAM_TITLE } from "@/constants/team";

import {
	colorTitleStyle,
	headingStyle,
	leftArrowIconStyle,
	submitButtonStyle,
	textInputBoxStyle,
	titleBoxStyle,
} from "@/components/CreateTeam/Main/Main.style";

const schema = yup
	.object({
		title: TEAM_TITLE.RULES(),
		content: TEAM_CONTENT.RULES(),
	})
	.required();

const Main = () => {
	const navigate = useNavigate();

	const onSubmit = (data: FieldValues) => {
		// const formData = new FormData();
		// data.map((value: File | null | string, key: string) => {
		// 	formData.append(key, value);
		// });
		console.log(data);
	};
	return (
		<>
			<Flex css={titleBoxStyle}>
				<LeftArrowIcon css={leftArrowIconStyle} onClick={() => navigate(-1)} />
				<Heading css={headingStyle} size="xLarge">
					PLANNING - 팀 만들기
				</Heading>
			</Flex>
			<Form onSubmit={onSubmit} defaultValues={TEAM_DEFAULT_VALUES} schema={schema}>
				<Box style={{ display: "inline-flex", width: "100%", marginTop: "40px" }}>
					<Form.ImageInputField name="image" />
					<Flex css={textInputBoxStyle}>
						<Form.TitleInputField
							placeholder={TEAM_TITLE.PLACEHOLDER}
							name={TEAM_TITLE.NAME}
							validateText={TEAM_TITLE.VALIDATE_TEXT()}
						/>
						<Form.ContentInputField
							placeholder={TEAM_CONTENT.PLACEHOLDER}
							name={TEAM_CONTENT.NAME}
							validateText={TEAM_CONTENT.VALIDATE_TEXT()}
						/>
					</Flex>
				</Box>
				<Box>
					<Text css={colorTitleStyle}>팀 대표 컬러</Text>
					<Form.ColorRadioInputField name="teamColor" />
					<button css={submitButtonStyle} type="submit">
						팀 생성하기
					</button>
				</Box>
			</Form>
		</>
	);
};
export default Main;
