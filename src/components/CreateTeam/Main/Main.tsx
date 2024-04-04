import type { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";

import LeftArrowIcon from "@/assets/svg/left-arrow-brand-primary.svg?react";

import { Box, Flex, Form, Heading, Text } from "@/components/common";

import { postMedia } from "@/api/media/postMedia";

import { TEAM_CONTENT, TEAM_DEFAULT_VALUES, TEAM_TITLE } from "@/constants/team";

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
		name: TEAM_TITLE.RULES(),
		description: TEAM_CONTENT.RULES(),
	})
	.required();

const Main = () => {
	const navigate = useNavigate();
	// const { mutate: postMediaMutate } = usePostMediaMutation();
	const { mutate: createTeamMutate } = useCreateTeam();
	const onSubmit = async (data: FieldValues) => {
		console.log("data", data);
		// 리팩토링 필요
		// const formData = new FormData();
		const d = new URLSearchParams(data);
		console.log("form data", d);
		if (data.coverImageUrl) {
			const imageData = new FormData();
			imageData.set("uploadImgFileList", data.coverImageUrl);

			console.log("imageData form", imageData.get("uploadImgFileList"));

			const { result } = await postMedia(imageData);

			console.log("url", result.mediaList[0].imgUrl);

			d.set("coverImageUrl", result.mediaList[0].imgUrl);

			const entries = d.entries();
			for (const pair of entries) {
				console.log(pair[0] + ", " + pair[1]);
			}

			createTeamMutate(d);
		} else {
			createTeamMutate(d);
		}
		navigate(-1);
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
