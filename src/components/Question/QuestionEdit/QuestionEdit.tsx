import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Flex, Box, Heading, Text, Carousel } from "@/components/common";

import { usePutQuestionMutation } from "@/hooks/api/question/usePutQuestionMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { QuestionEditType } from "@/types/question";

import {
	layoutStyle,
	inputStyle,
	contentTextareaStyle,
	uploadButtonStyle,
} from "@/components/Question/QuestionUpload/QuestionUpload.style";

const QuestionEdit = ({ boardId, title, content, mediaList, hashtagList }: QuestionEditType) => {
	const { mutate: putQuestionMutate } = usePutQuestionMutation();

	const [newTitle, setNewTitle] = useState(title);
	const [newContent, setNewContent] = useState(content);
	const [newHashtagList] = useState(hashtagList);

	const [updateMediaList, setUpdateMediaList] = useState<string[]>(mediaList);

	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const formData = new FormData();

		const updateQuestionRequest = {
			title: newTitle,
			content: newContent,
			hashtagList: newHashtagList,
			mediaList: updateMediaList,
		};

		formData.append("updateQuestionRequest", JSON.stringify(updateQuestionRequest));

		putQuestionMutate(
			{
				questionId: boardId,
				formData,
			},
			{
				onSuccess: () => {
					navigate(`/question/view/${boardId}`);
				},
			},
		);
	};

	return (
		<Box tag="section" css={layoutStyle}>
			<Heading size="large" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
				Q&A - 질문 수정하기
			</Heading>

			<input
				type="text"
				placeholder="제목을 입력해주세요."
				css={inputStyle}
				value={newTitle}
				onChange={(e) => setNewTitle(e.target.value)}
			/>

			<Flex styles={{ gap: "64px", marginTop: "60px" }}>
				<Carousel
					width={536}
					height={466}
					borderRadius="20px"
					showArrows={updateMediaList.length > 1}
					showDots={updateMediaList.length > 1}
					length={updateMediaList.length}
					updateMediaList={updateMediaList}
					setUpdateMediaList={setUpdateMediaList}
					hasGallery
				>
					{updateMediaList.map((imgUrl, index) => (
						<Carousel.Item index={index} key={imgUrl}>
							<img src={imgUrl} alt="mediaImg" />
						</Carousel.Item>
					))}
				</Carousel>

				<textarea
					placeholder="글을 입력해주세요"
					css={contentTextareaStyle}
					value={newContent}
					onChange={(e) => setNewContent(e.target.value)}
				/>
			</Flex>

			<button css={uploadButtonStyle} onClick={handleSubmit}>
				<Text size="xLarge">글 수정하기</Text>
			</button>
		</Box>
	);
};

export default QuestionEdit;
