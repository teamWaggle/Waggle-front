import type { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import LeftArrowIcon from "@/assets/svg/left-arrow-brand-primary.svg?react";

import { Box, Flex, Form, Heading, Text } from "@/components/common";
import * as yup from "yup";

import { TEAM_CONTENT, TEAM_DEFAULT_VALUES, TEAM_TITLE } from "@/constants/team";

import { usePostMediaMutation } from "@/hooks/api/media/usePostMediaMutation";
import { useCreateTeam } from "@/hooks/api/team/useCreateTeam";

import {
	colorTitleStyle,
	headingStyle,
	leftArrowIconStyle,
	submitButtonStyle,
	teamContentBox,
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
	const { mutate: postMediaMutate } = usePostMediaMutation();
	const { mutate: createTeamMutate } = useCreateTeam();
	const onSubmit = async (data: FieldValues) => {
		// 리팩토링 필요
		const formData = new FormData();
		formData.append("title", data.title);
		formData.append("content", data.content);
		formData.append("teamColor", data.teamColor);
		formData.append("maxTeamSize", "7");
		const imageData = new FormData();
		imageData.append("uploadImgFileList", data.image);
		postMediaMutate(imageData, {
			onSuccess: ({ result }) => {
				formData.append("coverImageUrl", result.mediaList[0].imgUrl);
				console.log(result.mediaList[0].imgUrl);
				createTeamMutate(formData);
				navigate(-1);
			},
		});
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
				<Flex css={teamContentBox}>
					<Form.ImageInputField name="coverImageUrl" />
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
				</Flex>
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
