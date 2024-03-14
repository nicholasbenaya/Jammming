import Spotify from "../src/util/Spotify.js";
import assert from "assert";

describe("Spotify", () => {
  describe(".getUserId", () => {
    it("returns userId", async () => {
      const expectedId = "qyadew6i4iqdjd2s0x46ya24a";
      const result = await Spotify.getUserId();
      assert.strictEqual(expectedId, result);
    });
  });
});
