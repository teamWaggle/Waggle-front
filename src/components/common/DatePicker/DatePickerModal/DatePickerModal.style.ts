import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const datePickerModalBoxStyle = css({
	position: "absolute",
	width: "286px",
	height: "fit-content",
	top: "110%",
	left: 0,
	zIndex: 10,
	border: `1px solid ${Theme.color.border}`,
	borderRadius: "4px",
	backgroundColor: Theme.color.white,
	padding: "12px",
});

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
