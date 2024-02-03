import { ALLOW_FILE_EXTENSION } from "@/constants/file";

const removeFileName = (fileName: string) => {
	const lastIndex = fileName.lastIndexOf(".");

	if (lastIndex < 0) {
		return "";
	}

	return fileName.substring(lastIndex + 1).toLowerCase();
};

export const fileExtensionValid = ({ name }: { name: string }) => {
	const extension = removeFileName(name);

	if (!(ALLOW_FILE_EXTENSION.indexOf(extension) > -1) || extension === "") {
		return false;
	}

	return true;
};
