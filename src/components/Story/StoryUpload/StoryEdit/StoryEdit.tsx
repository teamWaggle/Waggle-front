import { useState, useRef } from "react";

import SampleImg from "@/assets/png/post-sample.png";
import LeftArrow from "@/assets/svg/ic-left-arrow-primary.svg?react";

import { Flex, Text } from "@/components/common";
import StoryImgSlider from "@/components/Story/StoryDetail/StoryImgSlider/StoryImgSlider";
import Gallery from "@/components/Story/StoryUpload/Gallery/Gallery";

import { usePutStoryMutation } from "@/hooks/api/usePutStoryMutation";
import useClickOutSide from "@/hooks/useClickOutSide";
import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	layoutStyle,
	headerStyle,
	imgBoxStyle,
	contentBoxStyle,
	profileImgStyle,
	textareaStyle,
	lengthTextStyle,
	uploadButtonStyle,
} from "@/components/Story/StoryUpload/StoryEdit/StoryEdit.style";

interface MediaListType {
	imageUrl: string;
	allowUpload: boolean;
}

const StoryEdit = ({
	imgUrls,
	prevContent,
	storyId,
}: {
	imgUrls: string[];
	prevContent: string;
	storyId: number;
}) => {
	const putStoryMutate = usePutStoryMutation();

	const [content, setContent] = useState(prevContent);
	const [hashtagList] = useState<string[]>(["test"]);

	const [isGalleryOpen, setIsGalleryOpen] = useState(false);
	const [mediaCurrentIndex, setMediaCurrentIndex] = useState(0);

	const [editMediaList, setEditMediaList] = useState<string[]>(imgUrls);
	const [updateFileList, setUpdateFileList] = useState<File[]>([]);

	const galleryRef = useRef<HTMLDivElement>(null);

	const modal = useModal();

	useClickOutSide(galleryRef, () => setIsGalleryOpen(false));

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const formData = new FormData();

		const mediaList: MediaListType[] = [];
		const deleteMediaList: string[] = [];

		const allowUpload = true;

		imgUrls.forEach((imageUrl) => {
			mediaList.push({ imageUrl, allowUpload });
		});

		imgUrls.forEach((imageUrl) => {
			deleteMediaList.push(imageUrl);
		});

		const updateStoryRequest = {
			content,
			hashtagList,
		};

		const updateMediaRequest = {
			storyId,
			mediaList,
			deleteMediaList,
		};

		formData.append("updateStoryRequest", JSON.stringify(updateStoryRequest));

		formData.append("updateMediaRequest", JSON.stringify(updateMediaRequest));

		updateFileList.forEach((file) => {
			formData.append("files", file);
		});

		for (const value of formData) {
			console.log(value);
		}

		putStoryMutate.mutate(
			{
				storyId,
				formData,
			},
			{ onSuccess: () => modal.closeModal() },
		);
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
					<StoryImgSlider imgUrls={editMediaList} isUpload />
					<Gallery
						isGalleryOpen={isGalleryOpen}
						setIsGalleryOpen={setIsGalleryOpen}
						galleryRef={galleryRef}
						prevImgUrls={editMediaList}
						mediaCurrentIndex={mediaCurrentIndex}
						setMediaCurrentIndex={setMediaCurrentIndex}
						setEditMediaList={setEditMediaList}
						setUpdateFileList={setUpdateFileList}
					/>
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
							{content && content.length}/500
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

export default StoryEdit;
