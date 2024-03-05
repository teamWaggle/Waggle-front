// import { useState } from "react";

import { usePostStoryMutation } from "@/hooks/api/usePostStoryMutation";

const Test = () => {
	const { mutatePostStory } = usePostStoryMutation();

	// const [file, setFile] = useState<FileList>();

	const formData = new FormData();

	const abc = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;

		const files = e.target.files[0];
		const reader = new FileReader();

		// const aaa: FileList = [];

		// console.log(files);

		// const fileList: File[][] = [];

		// for (let i = 0; i < files.length; i++) {
		// 	const reader = new FileReader();

		// 	reader.readAsDataURL(files[i]);

		// 	reader.onloadend = () => {
		// 		// aaa.push(files[i]);
		// 		// setFile(files[i]);
		// 		fileList.push([files[i]]);
		// 		// formData.append("files", [files[i]]);
		// 	};
		// }

		// console.log(fileList);

		const createStoryRequest = {
			content: "abc",
			hashtagList: ["abc"],
		};

		formData.append("createStoryRequest", JSON.stringify(createStoryRequest));

		// formData.append("files", fileList);

		// mutatePostStory(formData, {
		// 	onSuccess: () => {
		// 		console.log("success");
		// 	},
		// });

		reader.readAsDataURL(files);

		// console.log(files);

		reader.onloadend = () => {
			formData.append("files", files);

			// console.log(reader.result);

			mutatePostStory(formData, {
				onSuccess: () => {
					console.log("success");
				},
			});
		};
	};

	return <input type="file" onChange={abc} multiple />;
};

export default Test;
