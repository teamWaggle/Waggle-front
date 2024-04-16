import { describe, expect, it } from "vitest";

import { isAuthProvider } from "@/utils/checkAuthProvider";

describe("IsAuthProvider", () => {
  it("isAuthProvider", () => {
    const google = "google";
    const naver = "naver";
    const kakao = "kakao";

    const test = "test";

    expect(isAuthProvider(google)).toBe(true);
    expect(isAuthProvider(naver)).toBe(true);
    expect(isAuthProvider(kakao)).toBe(true);
    expect(isAuthProvider(test)).toBe(false);
  });
});
