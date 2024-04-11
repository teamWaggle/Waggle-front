import { describe, expect, it } from "vitest";

import { validateAllClear } from "@/utils/validator";

describe("ValidatorAllclear", () => {
  it("validator", () => {
    const password = "1234qwer!@";
    expect(validateAllClear(password)).toBe(true);
  });
});
