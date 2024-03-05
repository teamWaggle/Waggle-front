import { useState } from "react";

import SampleImg from "@/assets/png/post-sample.png";
import LeftArrow from "@/assets/svg/ic-left-arrow-primary.svg?react";

import { Flex, Text } from "@/components/common";
import StoryImgSlider from "@/components/Story/StoryDetail/StoryImgSlider";

import { usePostStoryMutation } from "@/hooks/api/usePostStoryMutation";
import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { FileProp } from "@/types/upload";

import {
	layoutStyle,
	headerStyle,
	imgBoxStyle,
	contentBoxStyle,
	profileImgStyle,
	textareaStyle,
	lengthTextStyle,
	uploadButtonStyle,
} from "@/components/Story/StoryUpload/StoryContent.style";

const StoryContent = ({ medias }: { medias: FileProp[] }) => {
	const { mutatePostStory } = usePostStoryMutation();

	console.log(medias[0].url);

	const file = new File([medias[0].url], `filetest.png`);

	const [content, setContent] = useState("");
	const [hashtagList] = useState<string[]>(["test"]);

	const modal = useModal();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const formData = new FormData();

		const createStoryRequest = {
			content,
			hashtagList,
		};

		formData.append("createStoryRequest", JSON.stringify(createStoryRequest));

		formData.append("files", file);

		for (const key of formData.keys()) {
			console.log(key);
		}

		for (const value of formData.values()) {
			console.log(value);
		}

		// formData.append("files", [medias[0].url]);

		mutatePostStory(formData, {
			onSuccess: () => {
				modal.closeModal();
			},
		});
	};

	return (
		<Flex css={layoutStyle}>
			<Flex css={headerStyle}>
				<LeftArrow />
				<Text size="xLarge" css={getDefaultTextStyle(Theme.color.text, 600)}>
					글 쓰기
				</Text>
			</Flex>

			<Flex styles={{ height: "calc(100% - 54px)" }}>
				<Flex css={imgBoxStyle}>
					<StoryImgSlider medias={medias} isUpload />
				</Flex>

				<Flex css={contentBoxStyle}>
					<Flex styles={{ direction: "column", gap: "12px", width: "100%" }}>
						{/* 프로필 */}
						<Flex styles={{ align: "center", gap: "10px" }}>
							<img src={SampleImg} alt="profileImg" css={profileImgStyle} />
							<Text size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
								강아지댕댕댕
							</Text>
						</Flex>

						{/* 본문 입력 */}
						<textarea
							css={textareaStyle}
							placeholder="사진에 대한 설명을 입력해주세요"
							maxLength={500}
							value={content}
							onChange={(e) => setContent(e.target.value)}
						/>

						{/* 글자수 */}
						<Text size="small" css={lengthTextStyle}>
							{content.length}/500
						</Text>
					</Flex>

					<Text size="xLarge" css={uploadButtonStyle} onClick={handleSubmit}>
						업로드
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default StoryContent;
