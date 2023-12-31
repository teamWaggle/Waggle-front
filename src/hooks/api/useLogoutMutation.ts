import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useSetRecoilState } from "recoil";

import { isLoggedInState } from "@store/auth";

import { deleteLogout } from "@api/auth/deleteLogout";

export const useLogoutMutation = () => {
	const queryClient = useQueryClient();

	const setIsLoggedIn = useSetRecoilState(isLoggedInState);

	const logOutMutation = useMutation({
		mutationFn: deleteLogout,
		onSuccess: () => {
			localStorage.removeItem("ACCESS_TOKEN");
			queryClient.clear();
			setIsLoggedIn(false);
			console.log("logout");
		},
		onError: () => {
			console.log("logout error");
		},
	});

	return { mutateLogOut: logOutMutation.mutate };
};
