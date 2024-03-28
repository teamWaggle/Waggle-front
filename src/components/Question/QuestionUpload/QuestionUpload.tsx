import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Heading, Text } from "@/components/common";
import PostUpload from "@/components/common/Post/PostUpload/PostUpload";

import { usePostQuestionMutation } from "@/hooks/api/question/usePostQuestionMutation";
import { useMultipleImgUpload } from "@/hooks/useMultipleImgUpload";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	layoutStyle,
	inputStyle,
	uploadButtonStyle,
} from "@/components/Question/QuestionUpload/QuestionUpload.style";

const QuestionUpload = () => {
	const { mutate: postQuestionMutate } = usePostQuestionMutation();

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const navigate = useNavigate();

	const { isLoading, handleImgUpload, dropImgUpload, uploadMediaList } = useMultipleImgUpload();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const formData = new FormData();

		const createQuestionRequest = {
			title,
			content,
			hashtagList: ["test"],
			mediaList: uploadMediaList,
		};

		formData.append("createQuestionRequest", JSON.stringify(createQuestionRequest));

		postQuestionMutate(formData, {
			onSuccess: () => {
				navigate("/question");
			},
		});
	};

	return (
		<Box tag="section" css={layoutStyle}>
			<Heading size="large" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
				Q&A - 질문 작성하기
			</Heading>

			<input
				type="text"
				placeholder="제목을 입력해주세요."
				css={inputStyle}
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			<PostUpload
				content={content}
				setContent={setContent}
				isLoading={isLoading}
				uploadMediaList={uploadMediaList}
				handleImgUpload={handleImgUpload}
				dropImgUpload={dropImgUpload}
			/>

			<button css={uploadButtonStyle} onClick={handleSubmit}>
				<Text size="xLarge">글 작성하기</Text>
			</button>
		</Box>
	);
};

export default QuestionUpload;
