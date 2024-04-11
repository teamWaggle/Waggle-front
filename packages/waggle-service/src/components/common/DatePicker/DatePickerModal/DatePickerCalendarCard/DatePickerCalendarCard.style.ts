import { css } from "@emotion/react";

import { isSameDay } from "date-fns";

import { Theme } from "@/styles/Theme";

export const datePickerCalendarCardStyle = (day: Date | "", isSelected: boolean) =>
  css({
    display: "flex",
    justifyContent: "center",
    padding: "8px",
    cursor: day ? "pointer" : "cursor",
    borderRadius: "50%",
    color: isSelected ? Theme.color.white : Theme.color.black,
    backgroundColor: isSelected ? Theme.color.brand_primary : "transparent",
    border: isSameDay(day, new Date()) ? `1px solid ${Theme.color.brand_primary}` : "none",
    ":hover": {
      backgroundColor: day ? Theme.color.brand_primary : "transparent",
      color: Theme.color.white,
    },
  });
