import { assert } from "chai";
import multiply from "../multiply.js";

describe("multiply", () => {
  it("should return 1 when 1 * 1", () => {
    assert.equal(multiply(1, 1), 1);
  });
});
