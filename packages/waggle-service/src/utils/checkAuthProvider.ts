export const isAuthProvider = (provider: string | null) => {
  return ["naver", "google", "kakao"].some((authProvider) => authProvider === provider);
};
