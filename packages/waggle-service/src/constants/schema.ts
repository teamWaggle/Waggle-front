import { TEAM_TITLE, TEAM_CONTENT } from "@/constants/team";
import * as yup from "yup";

export const ADD_TEAM_SCHEMA = yup.object({
  title: TEAM_TITLE.RULES(),
  content: TEAM_CONTENT.RULES(),
  startDate: yup
    .date()
    .min(new Date(new Date().setHours(0, 0, 0, 0)), "시작일은 오늘 혹은 이후여야 합니다.")
    .max(yup.ref("endDate"), "시작일은 종료일 이전이어야 합니다."),
  endDate: yup.date().min(yup.ref("startDate"), "종료일은 시작일이거나 이후여야 합니다."),
  // 추후 변경
  // startTime: yup.date().when(["startDate"], (values, schema) => {
  //   const startDate = values[0];
  //   const today = new Date();
  //   if (startDate && format(startDate, "yyyy-mm-dd") === format(today, "yyyy-mm-dd")) {
  //     return schema.min(today, "시작시간은 현재시간 이후여야 합니다.");
  //   }
  //   return schema;
  // }),
  startTime: yup.date(),
  endTime: yup.date().min(yup.ref("startTime"), "종료시간은 시작시간 이후여야 합니다."),
});

export const EDIT_TEAM_SCHEMA = yup.object({
  title: TEAM_TITLE.RULES(),
  content: TEAM_CONTENT.RULES(),
  startDate: yup.date().max(yup.ref("endDate"), "시작일은 종료일 이전이어야 합니다."),
  endDate: yup.date().min(yup.ref("startDate"), "종료일은 시작일이거나 이후여야 합니다."),
  startTime: yup.date(),
  endTime: yup.date().min(yup.ref("startTime"), "종료시간은 시작시간 이후여야 합니다."),
});
