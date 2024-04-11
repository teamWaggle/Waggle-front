import { describe, expect, it } from "vitest";

import { convertToUTC } from "@/utils/convertToUTC";

describe("ConvertToUTC", () => {
  it("convertToUTC", () => {
    const date = new Date("05 October 2011 14:48");
    expect(convertToUTC(date)).toStrictEqual({ date: "2011-10-05", time: "05:48:00.000Z" });
  });
});
