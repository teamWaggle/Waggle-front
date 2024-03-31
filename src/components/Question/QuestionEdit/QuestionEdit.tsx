import { Box, Heading, Text } from "@/components/common";
import PostEdit from "@/components/common/Post/PostEdit";

import { useAddQuestionForm } from "@/hooks/question/useAddQuestionForm";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { QuestionEditType } from "@/types/question";

import {
	layoutStyle,
	inputStyle,
	uploadButtonStyle,
} from "@/components/Question/QuestionUpload/QuestionUpload.style";

const QuestionEdit = ({ boardId, title, content, mediaList, hashtagList }: QuestionEditType) => {
	const { questionRequest, updateInputValue, handleSubmit } = useAddQuestionForm({
		questionId: boardId,
		initialData: {
			title,
			content,
			mediaList,
			hashtagList,
		},
	});

	console.log(questionRequest);

	return (
		<Box tag="section" css={layoutStyle}>
			<Heading size="large" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
				Q&A - 질문 수정하기
			</Heading>

			<input
				type="text"
				placeholder="제목을 입력해주세요."
				css={inputStyle}
				value={questionRequest.title}
				onChange={(e) => updateInputValue("title", e.target.value)}
			/>

			<PostEdit
				value={questionRequest.content}
				questionUpdateInputValue={updateInputValue}
				updateMediaList={questionRequest.mediaList}
			/>

			<button css={uploadButtonStyle} onClick={handleSubmit}>
				<Text size="xLarge">글 수정하기</Text>
			</button>
		</Box>
	);
};

export default QuestionEdit;
