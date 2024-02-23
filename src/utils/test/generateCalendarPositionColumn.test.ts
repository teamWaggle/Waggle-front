import { describe, expect, it } from "vitest";

import { generateCalendarPositionColumn } from "@/utils/generateCalendarPositionColumn";

describe("GenerateCalendarPositionColumn", () => {
	describe("generateCalendarPositionColumn", () => {
		it("10", () => {
			expect(generateCalendarPositionColumn(10)).toStrictEqual(483.42857142857144);
		});
		it("0", () => {
			expect(generateCalendarPositionColumn(0)).toStrictEqual(0);
		});
		it("1", () => {
			expect(generateCalendarPositionColumn(1)).toStrictEqual(161.14285714285714);
		});
	});
});
