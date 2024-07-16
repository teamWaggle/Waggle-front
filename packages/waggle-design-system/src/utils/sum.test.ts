import { expect, test } from "vitest";
import { sum } from "@/utils/sum";

test("덧셈 테스트 1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});
