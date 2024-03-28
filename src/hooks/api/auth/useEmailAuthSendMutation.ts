import { toast } from "react-toastify";

import { useMutation } from "@tanstack/react-query";

import { postEmailAuthSend } from "@/api/auth/postEmailAuthSend";

export const useEmailAuthSendMutation = () => {
	const emailAuthSendMutation = useMutation({
		mutationFn: postEmailAuthSend,
		onSuccess: () => {
			console.log("email send success");
		},
		onError: () => {
			toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
		},
	});

	return emailAuthSendMutation;
};
