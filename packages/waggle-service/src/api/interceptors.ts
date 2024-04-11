import type { AxiosError, InternalAxiosRequestConfig } from "axios";

import { postRefreshToken } from "@/api/auth/postRefreshToken";
import { authorizedAxiosInstance } from "@/api/axiosInstance";
import { HTTPError } from "@/api/HTTPError";

import { ACCESS_TOKEN_KEY, ERROR_CODE, HTTP_STATUS_CODE } from "@/constants/api";

export interface ErrorResponseData {
  statusCode?: number;
  message?: string;
  code?: number;
}

export const checkToken = (config: InternalAxiosRequestConfig) => {
  if (!config.headers || config.headers.Authorization) {
    return config;
  }

  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (!accessToken) {
    window.location.href = "/";

    throw new Error("토큰이 유효하지 않습니다");
  }

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

export const handleTokenError = async (error: AxiosError<ErrorResponseData>) => {
  const originalRequest = error.config;

  if (!error.response || !originalRequest) {
    throw new Error("에러가 발생했습니다.");
  }

  const { data, status } = error.response;

  if (
    status === HTTP_STATUS_CODE.BAD_REQUEST &&
    (data.code === ERROR_CODE.INVALID_REFRESH_TOKEN ||
      data.code === ERROR_CODE.MISMATCH_REFRESH_TOKEN ||
      data.code === ERROR_CODE.INVALID_TOKEN ||
      data.code === ERROR_CODE.UNAUTHORIZED_MEMBER ||
      data.code === ERROR_CODE.TOKEN_HAS_EXPIRED ||
      data.code === ERROR_CODE.REDIRECT_NOT_MATCHING ||
      data.code === ERROR_CODE.ROLE_CANNOT_EXECUTE_URI ||
      data.code === ERROR_CODE.MUST_AUTHORIZED_URI ||
      data.code === ERROR_CODE.REFRESH_NOT_EXIST_IN_COOKIE ||
      data.code === ERROR_CODE.MISMATCH_EMAIL_AND_PASSWORD)
  ) {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem("MEMBER_ID");

    throw new HTTPError(status, data.message, data.code);
  }

  if (data.code === ERROR_CODE.TOKEN_HAS_EXPIRED) {
    const { result } = await postRefreshToken();

    originalRequest.headers.Authorization = `Bearer ${result.accessToken}`;

    localStorage.setItem(ACCESS_TOKEN_KEY, result.accessToken);
    localStorage.setItem("MEMBER_ID", String(result.member.memberId));

    return authorizedAxiosInstance(originalRequest);
  }

  throw error;
};

export const handleAPIError = (error: AxiosError<ErrorResponseData>) => {
  if (!error.response) {
    throw error;
  }
  const { data, status } = error.response;

  if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw new HTTPError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, data.message);
  }

  throw new HTTPError(status, data.message, data.code);
};
