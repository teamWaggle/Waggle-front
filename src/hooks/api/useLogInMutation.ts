// import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";

import { useSetRecoilState } from "recoil";

// import { useToast } from "@hooks/common/useToast";

import { isLoggedInState } from "@store/auth";

import { axiosInstance } from "@api/axiosInstance";
import { TokenType } from "@type/auth";
import { postLogIn } from "@api/auth/postLogin";

// import { ErrorResponseData } from "@api/interceptors";

// import { ACCESS_TOKEN_KEY } from "@constants/api";
// import { PATH } from "@constants/path";

export const useLogInMutation = () => {
	// const navigate = useNavigate();
	// const { createToast } = useToast();

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

			// createToast("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
			console.log("login error");
			// console.log(error);
			// console.log(isSuccess);
			// console.log(message);
			// console.log(result);
		},
		// onSettled: () => {
		// 	navigate(PATH.ROOT);
		// },
	});

	return { mutateLogIn: logInMutation.mutate };
};
