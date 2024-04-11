import { describe, expect, it } from "vitest";

import { getTeamScheduleStatus } from "@/utils/getTeamScheduleStatus";

describe("getTeamScheduleStatus 테스트", () => {
  it("IN_PROGRESS 테스트", () => {
    expect(getTeamScheduleStatus("IN_PROGRESS")).toBe("진행중");
  });
  it("UPCOMING 테스트", () => {
    expect(getTeamScheduleStatus("UPCOMING")).toBe("예정");
  });
  it("CLOSING 테스트", () => {
    expect(getTeamScheduleStatus("CLOSING")).toBe("마감");
  });
});
