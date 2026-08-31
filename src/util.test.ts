import { describe, expect, it } from "vitest";
import { humanize } from "./util";

// The build plugin keeps its own copy for the exported .md files. The two must
// agree, or the same number renders differently on /index.html and /index.md.
// Imported dynamically because the plugin is plain .mjs.
const { humanizeDollars } = await import("../plugins/markdown-export.mjs");

describe("humanize", () => {
  // Exactly 1_000 and exactly 1_000_000 are the values the `>` comparison got
  // wrong; the rest fence them in.
  const cases: Array<[number, string]> = [
    [0, "0"],
    [999, "999"],
    [1_000, "1K"],
    [1_001, "1K"],
    [999_999, "1000K"],
    [1_000_000, "1M"],
    [1_000_001, "1M"],
    [765_152, "765K"],
  ];

  for (const [input, expected] of cases) {
    it(`humanize(${input}) === "${expected}"`, () => {
      expect(humanize(input)).toBe(expected);
    });
  }

  it("agrees with the build plugin's humanizeDollars at every boundary", () => {
    for (const [input] of cases) {
      expect(`$${humanize(input)}`).toBe(humanizeDollars(input));
    }
  });
});
