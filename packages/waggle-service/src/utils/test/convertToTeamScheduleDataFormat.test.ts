import { describe, expect, it } from "vitest";

import { convertToTeamScheduleDataFormat } from "@/utils/convertToTeamScheduleDataFormat";

describe("convertToTeamScheduleDataFormat", () => {
  it("TeamScheduleData의 시간값을 문자열로 변환 ", () => {
    const teamScheduleData = {
      title: "test",
      content: "test",
      startDate: new Date("2021-07-01 12:34:56"),
      endDate: new Date("2021-07-02 12:34:56"),
      startTime: new Date("2021-07-01 12:34:56"),
      endTime: new Date("2021-07-01 12:34:56"),
    };

    expect(convertToTeamScheduleDataFormat(teamScheduleData)).toStrictEqual({
      title: "test",
      content: "test",
      startDate: "2021-07-01",
      endDate: "2021-07-02",
      startTime: "12:34",
      endTime: "12:34",
    });
  });
});
