import { describe, expect, it } from "vitest";

import { generateCalendarPositionRow } from "@/utils/generateCalendarPositionRow";

describe("GenerateCalendarPositionRow", () => {
	describe("generateCalendarPositionRow", () => {
		it("10", () => {
			expect(generateCalendarPositionRow(10)).toStrictEqual(76.42857142857143);
		});
		it("0", () => {
			expect(generateCalendarPositionRow(0)).toStrictEqual(0);
		});
		it("1", () => {
			expect(generateCalendarPositionRow(1)).toStrictEqual(0);
		});
	});
});
