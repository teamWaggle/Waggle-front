import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const datePickerModalTitleBoxStyle = css({
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "8px",
  marginLeft: "12px",
});

export const datePickerCalendarTitleStyle = css({
  fontWeight: "400",
  fontSize: "14px",
  fontFamily: "pretendard",
});

export const datePickerCalendarBoxStyle = css({
  display: "grid",
  margin: "0 auto",
  gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
  "& > :nth-of-type(7n+1)": {
    color: Theme.color.btn_danger,
  },
  "& > :nth-of-type(7n)": {
    color: Theme.color.saturday,
  },
});
