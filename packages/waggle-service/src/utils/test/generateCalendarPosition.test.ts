import { describe, expect, it } from "vitest";

import generateCalendarPosition from "@/utils/generateCalendarPosition";

describe("generateCalendarPosition", () => {
  it("10", () => {
    expect(generateCalendarPosition(10)).toStrictEqual({
      row: 76.42857142857143,
      column: 483.42857142857144,
    });
  });
  it("0", () => {
    expect(generateCalendarPosition(0)).toStrictEqual({ row: 0, column: 0 });
  });
  it("1", () => {
    expect(generateCalendarPosition(1)).toStrictEqual({ row: 0, column: 161.14285714285714 });
  });
});
