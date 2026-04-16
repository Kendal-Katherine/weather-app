import { formatTemperature } from "./format";

describe("formatTemperature", () => {
  it("should format temperature correctly", () => {
    const result = formatTemperature(25);

    expect(result).toBe("25°C");
  });
});