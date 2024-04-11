import { describe, expect, it } from "vitest";

import { dateFormatToUTC } from "@/utils/dateFormatToUTC";

describe("DateFormatToUTC", () => {
  it("dateFormatToUTC", () => {
    expect(dateFormatToUTC("2021", "5", "5")).toBe("2021-05-05");
  });
});
