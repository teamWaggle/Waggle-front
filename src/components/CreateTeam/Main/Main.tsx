import type { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import LeftArrowIcon from "@/assets/svg/left-arrow-brand-primary.svg?react";

import { Box, Flex, Form, Heading, Text } from "@/components/common";

import { TEAM_CONTENT, TEAM_DEFAULT_VALUES, TEAM_TITLE } from "@/constants/team";

import {
	colorTitleStyle,
	headingStyle,
	imageInputBoxStyle,
	leftArrowIconStyle,
	submitButtonStyle,
	textInputBoxStyle,
	titleBoxStyle,
} from "@/components/CreateTeam/Main/Main.style";

const Main = () => {
	const navigate = useNavigate();

	const onSubmit = (data: FieldValues) => {
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
			<Form onSubmit={onSubmit} defaultValues={TEAM_DEFAULT_VALUES}>
				<Box style={{ display: "inline-flex", width: "100%", marginTop: "40px" }}>
					<Box css={imageInputBoxStyle}>
						<Form.ImageInputField name="image" />
					</Box>
					<Flex css={textInputBoxStyle}>
						<Form.TitleInputField
							placeholder="팀 이름을 입력해주세요"
							name="title"
							validateText={TEAM_TITLE.MESSAGE}
							rules={TEAM_TITLE.VALIDATION}
						/>
						<Form.ContentInputField
							placeholder="팀 소개를 입력해주세요"
							name="content"
							validateText={TEAM_CONTENT.MESSAGE}
							rules={TEAM_CONTENT.VALIDATION}
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
