import { describe, expect, it } from "vitest";

import { getDate } from "@/utils/getDate";

describe("getDate 테스트", () => {
  it("getCurrentYear 테스트", () => {
    const date = new Date("2021-07-01");
    const { getCurrentYear } = getDate();
    expect(getCurrentYear(date)).toBe(2021);
  });

  it("getCurrentMonth 테스트", () => {
    const date = new Date("2021-07-01");
    const { getCurrentMonth } = getDate();
    expect(getCurrentMonth(date)).toBe(7);
  });
  it("getTime 테스트", () => {
    const date = new Date("2021-07-01 12:34:56");
    const { getTime } = getDate();
    expect(getTime(date)).toBe("12:34");
  });
  it("getyyyyMMdd 테스트", () => {
    const date = new Date("2021-07-01");
    const { getYearMonthDay } = getDate();
    expect(getYearMonthDay(date)).toBe("2021-07-01");
  });
});
