import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const datePickerCalendarCardStyle = (today: boolean, isSelected: boolean) =>
	css({
		justifyContent: "center",
		padding: "8px",
		cursor: "pointer",
		borderRadius: "50%",
		color: isSelected ? Theme.color.white : Theme.color.black,
		backgroundColor: isSelected ? Theme.color.brand_primary : "transparent",
		border: today ? `1px solid ${Theme.color.brand_primary}` : "none",
		":hover": {
			backgroundColor: Theme.color.brand_primary,
			color: Theme.color.white,
		},
	});
