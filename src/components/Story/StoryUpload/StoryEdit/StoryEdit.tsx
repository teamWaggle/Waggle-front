import { useState, useRef } from "react";

import SampleImg from "@/assets/png/post-sample.png";
import PrevArrowIcon from "@/assets/svg/ic-left-arrow-primary.svg?react";
import LeftArrowIcon from "@/assets/svg/ic-left-arrow.svg?react";
import RightArrowIcon from "@/assets/svg/ic-right-arrow.svg?react";

import { Flex, Text } from "@/components/common";
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
	imgDotBoxStyle,
	imgDotStyle,
	arrowBoxStyle,
} from "@/components/Story/StoryUpload/StoryEdit/StoryEdit.style";

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

	const [updateMediaList, setUpdateMediaList] = useState<string[]>(imgUrls);

	const galleryRef = useRef<HTMLDivElement>(null);

	const modal = useModal();

	useClickOutSide(galleryRef, () => setIsGalleryOpen(false));

	const handleLeftArrowClick = () => {
		if (mediaCurrentIndex === 0) return;

		setMediaCurrentIndex((prev) => prev - 1);
	};

	const handleRightArrowClick = () => {
		if (mediaCurrentIndex === imgUrls.length - 1) return;

		setMediaCurrentIndex((prev) => prev + 1);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const formData = new FormData();

		const updateStoryRequest = {
			content,
			hashtagList,
		};

		const updateMediaRequest = {
			mediaList: updateMediaList,
		};

		formData.append("updateStoryRequest", JSON.stringify(updateStoryRequest));

		formData.append("updateMediaRequest", JSON.stringify(updateMediaRequest));

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
				<PrevArrowIcon />
				<Text size="xLarge" css={getDefaultTextStyle(Theme.color.text, 600)}>
					수정하기
				</Text>
			</Flex>

			<Flex styles={{ height: "calc(100% - 54px)" }}>
				{updateMediaList !== null && (
					<Flex css={imgBoxStyle}>
						<img src={updateMediaList[mediaCurrentIndex]} alt="mediaImg" />

						<Gallery
							isGalleryOpen={isGalleryOpen}
							setIsGalleryOpen={setIsGalleryOpen}
							galleryRef={galleryRef}
							mediaCurrentIndex={mediaCurrentIndex}
							setMediaCurrentIndex={setMediaCurrentIndex}
							updatedMediaList={updateMediaList}
							setUpdateMediaList={setUpdateMediaList}
						/>

						<Flex
							css={arrowBoxStyle(mediaCurrentIndex === 0)}
							onClick={handleLeftArrowClick}
							className="leftArrow"
						>
							<LeftArrowIcon width={40} height={40} />
						</Flex>
						<Flex
							css={arrowBoxStyle(mediaCurrentIndex === updateMediaList.length - 1)}
							onClick={handleRightArrowClick}
							className="rightArrow"
						>
							<RightArrowIcon width={40} height={40} />
						</Flex>
						<Flex css={imgDotBoxStyle}>
							{updateMediaList.length > 1 &&
								[...Array(updateMediaList.length)].map((_, index) => (
									<div key={index} css={imgDotStyle(mediaCurrentIndex === index)} />
								))}
						</Flex>
					</Flex>
				)}

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
