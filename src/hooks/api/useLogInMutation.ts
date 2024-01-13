import { useSetRecoilState } from "recoil";

import { useMutation } from "@tanstack/react-query";

import { postLogIn } from "@/api/auth/postLogin";
import { axiosInstance } from "@/api/axiosInstance";
import { isLoggedInState } from "@/store/auth";
import { TokenType } from "@/types/auth";

export const useLogInMutation = () => {
	const setIsLoggedIn = useSetRecoilState(isLoggedInState);

	const logInMutation = useMutation({
		mutationFn: postLogIn,
		onSuccess: ({ code, isSuccess, message, result }: TokenType) => {
			localStorage.setItem("ACCESS_TOKEN", result.accessToken);
			axiosInstance.defaults.headers.Authorization = `Bearer ${result.accessToken}`;

			setIsLoggedIn(true);

			console.log(code);
			console.log(isSuccess);
			console.log(message);
			console.log(result.accessToken);
		},
		onError: () => {
			setIsLoggedIn(false);

			console.log("login error");
		},
	});

	return { mutateLogIn: logInMutation.mutate };
};
