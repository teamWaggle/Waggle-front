import { describe, expect, it } from "vitest";

import { findEmailReducer } from "@/utils/findEmailUtils";

describe("FindEmailReducer", () => {
	it("CHANGE_YEAR_OPTION", () => {
		const state = {
			year: false,
			month: false,
			day: false,
			yearSelect: false,
			monthSelect: false,
			daySelect: false,
			yearText: "생년",
			monthText: "월 선택",
			dayText: "일 선택",
		};
		expect(findEmailReducer(state, { type: "CHANGE_YEAR_OPTION", payload: "test" })).toStrictEqual({
			...state,
			year: !state.year,
		});
	});

	it("CHANGE_MONTH_OPTION", () => {
		const state = {
			year: false,
			month: false,
			day: false,
			yearSelect: false,
			monthSelect: false,
			daySelect: false,
			yearText: "생년",
			monthText: "월 선택",
			dayText: "일 선택",
		};
		expect(findEmailReducer(state, { type: "CHANGE_MONTH_OPTION", payload: "test" })).toStrictEqual(
			{
				...state,
				month: !state.month,
			},
		);
	});

	it("CHANGE_DAY_OPTION", () => {
		const state = {
			year: false,
			month: false,
			day: false,
			yearSelect: false,
			monthSelect: false,
			daySelect: false,
			yearText: "생년",
			monthText: "월 선택",
			dayText: "일 선택",
		};
		expect(findEmailReducer(state, { type: "CHANGE_DAY_OPTION", payload: "test" })).toStrictEqual({
			...state,
			day: !state.day,
		});
	});

	it("SELECT_YEAR", () => {
		const state = {
			year: false,
			month: false,
			day: false,
			yearSelect: false,
			monthSelect: false,
			daySelect: false,
			yearText: "생년",
			monthText: "월 선택",
			dayText: "일 선택",
		};
		expect(findEmailReducer(state, { type: "SELECT_YEAR", payload: "test" })).toStrictEqual({
			...state,
			yearSelect: true,
		});
	});
	it("SELECT_MONTH", () => {
		const state = {
			year: false,
			month: false,
			day: false,
			yearSelect: false,
			monthSelect: false,
			daySelect: false,
			yearText: "생년",
			monthText: "월 선택",
			dayText: "일 선택",
		};
		expect(findEmailReducer(state, { type: "SELECT_MONTH", payload: "test" })).toStrictEqual({
			...state,
			monthSelect: true,
		});
	});

	it("SELECT_DAY", () => {
		const state = {
			year: false,
			month: false,
			day: false,
			yearSelect: false,
			monthSelect: false,
			daySelect: false,
			yearText: "생년",
			monthText: "월 선택",
			dayText: "일 선택",
		};
		expect(findEmailReducer(state, { type: "SELECT_DAY", payload: "test" })).toStrictEqual({
			...state,
			daySelect: true,
		});
	});

	it("CHANGE_YEAR_TEXT", () => {
		const state = {
			year: false,
			month: false,
			day: false,
			yearSelect: false,
			monthSelect: false,
			daySelect: false,
			yearText: "생년",
			monthText: "월 선택",
			dayText: "일 선택",
		};
		expect(findEmailReducer(state, { type: "CHANGE_YEAR_TEXT", payload: "test" })).toStrictEqual({
			...state,
			yearText: "test",
		});
	});

	it("CHANGE_MONTH_TEXT", () => {
		const state = {
			year: false,
			month: false,
			day: false,
			yearSelect: false,
			monthSelect: false,
			daySelect: false,
			yearText: "생년",
			monthText: "월 선택",
			dayText: "일 선택",
		};
		expect(findEmailReducer(state, { type: "CHANGE_MONTH_TEXT", payload: "test" })).toStrictEqual({
			...state,
			monthText: "test",
		});
	});
	it("CHANGE_DAY_TEXT", () => {
		const state = {
			year: false,
			month: false,
			day: false,
			yearSelect: false,
			monthSelect: false,
			daySelect: false,
			yearText: "생년",
			monthText: "월 선택",
			dayText: "일 선택",
		};
		expect(findEmailReducer(state, { type: "CHANGE_DAY_TEXT", payload: "test" })).toStrictEqual({
			...state,
			dayText: "test",
		});
	});
});
