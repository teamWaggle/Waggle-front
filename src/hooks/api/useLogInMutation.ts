import { toast } from "react-toastify";

import { useSetRecoilState } from "recoil";

import { useMutation } from "@tanstack/react-query";

import { postLogIn } from "@/api/auth/postLogin";
import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { isLoggedInState, memberIdState } from "@/recoil/atoms/auth";

import type { TokenType } from "@/types/auth";

export const useLogInMutation = () => {
	const setIsLoggedIn = useSetRecoilState(isLoggedInState);
	const setMemberId = useSetRecoilState(memberIdState);

	const logInMutation = useMutation({
		mutationFn: postLogIn,
		onSuccess: ({ result }: TokenType) => {
			// localStorage.setItem("ACCESS_TOKEN", result.accessToken);
			localStorage.setItem(
				"ACCESS_TOKEN",
				"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkNmQ5OWUzNy04MWE1LTQzOGItYjBjMS1jYzY1MmRiYmU5MTYiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNzA5NjUzOTk5fQ.FukEjTXVdNqa4CexXjW9BMNE8XgfnLQ6lBCAC0qfT6s",
			);

			authorizedAxiosInstance.defaults.headers.Authorization = `Bearer ${result.accessToken}`;
			setMemberId(result.member.memberId);
			setIsLoggedIn(true);
		},
		onError: () => {
			toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");

			setIsLoggedIn(false);
		},
	});

	return { mutateLogIn: logInMutation.mutate };
};
