import { usePostStoryMutation } from "@/hooks/api/usePostStoryMutation";

const Test = () => {
	const postStoryMutation = usePostStoryMutation();
	const formData = new FormData();

	const abc = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;

		const files = e.target.files;

		const createStoryRequest = {
			content: "abc",
			hashtagList: ["abc"],
		};

		formData.append("createStoryRequest", JSON.stringify(createStoryRequest));

		if (!files) {
			return;
		}

		for (let i = 0; i < files.length; i++) {
			const reader = new FileReader();
			reader.readAsDataURL(files[i]);
			reader.onloadend = () => {
				formData.append("files", files[i]);
			};
		}
	};

	const aaa = () => {
		postStoryMutation.mutate(formData, {
			onSuccess: () => {
				console.log("success");
			},
		});
	};

	return (
		<>
			<input type="file" onChange={abc} multiple />
			<button onClick={aaa}>fsdfsd</button>
		</>
	);
};

export default Test;
