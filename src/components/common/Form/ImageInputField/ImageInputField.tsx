import { useEffect, useState } from "react";
import type { FieldValues } from "react-hook-form";
import { useController, useFormContext } from "react-hook-form";

import PhotoIcon from "@/assets/svg/ic-media-upload.svg?react";

import { Flex } from "@/components/common";

import {
	imageBoxStyle,
	imageInputStyle,
	imageStyle,
	resetImageButtonStyle,
} from "@/components/common/Form/ImageInputField/ImageInputField.style";

const ImageInputField = ({ name }: { name: keyof FieldValues }) => {
	const { control } = useFormContext();
	const { field: imageField } = useController({
		control,
		name,
	});
	const { value } = imageField;
	const [imagePreview, setImagePreview] = useState<string | null>(null);

	useEffect(() => {
		const newUrl = value ? URL.createObjectURL(value[0]) : null;
		if (newUrl !== imagePreview) {
			URL.revokeObjectURL(imagePreview || "");
			setImagePreview(newUrl);
		}
	}, [value]);

	const handleResetImage = () => {
		imageField.onChange({ target: { value: null, name: "image" } });
	};
	return (
		<>
			<input
				type="file"
				multiple={false}
				accept="image/*"
				css={imageInputStyle}
				id="image"
				onChange={(e) => {
					const file = e.target.files;
					if (file) {
						imageField.onChange({ target: { value: file, name: "image" } });
					}
				}}
			/>
			<label css={imageBoxStyle(!!imagePreview)} htmlFor="image">
				{imagePreview && <img css={imageStyle} src={imagePreview} alt="team image" />}
				{!imagePreview && <PhotoIcon style={{ width: "40px" }} />}
			</label>
			<Flex onClick={handleResetImage} css={resetImageButtonStyle}>
				사진 초기화
			</Flex>
		</>
	);
};
export default ImageInputField;
