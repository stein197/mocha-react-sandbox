const assert = require("node:assert");
const Sandbox = require("../src/Sandbox");

describe("Sandbox", () => {
	describe("Sandbox.run()", () => {
		it("Context shouldn't have Window API right after sandbox instantiation and before calling run() method", () => {
			const dummy = {};
			const sb = new Sandbox(dummy);
			assert.deepStrictEqual(dummy, {});
		});
		it("Should make Window API such as document, window etc.", () => {
			const dummy = {};
			const sb = new Sandbox(dummy);
			sb.run(() => {
				assert.ok(dummy.document != null);
				assert.ok(dummy.window != null);
				assert.ok(dummy.File != null);
			});
		});
		it("Should delete Window API after a function execution", () => {
			const dummy = {};
			const sb = new Sandbox(dummy);
			sb.run(() => {});
			assert.ok(dummy.document == null);
			assert.ok(dummy.window == null);
			assert.ok(dummy.File == null);
		});
	});
});
