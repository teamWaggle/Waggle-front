import { describe, expect, it } from "vitest";

import { fileExtensionValid } from "@/utils/file";

describe("RemoveFileName", () => {
	it("removeFileName", () => {
		expect(fileExtensionValid({ name: "file.txt" })).toBeFalsy();
		expect(fileExtensionValid({ name: "file.png" })).toBeTruthy();
		expect(fileExtensionValid({ name: "" })).toBeFalsy();
	});
});
