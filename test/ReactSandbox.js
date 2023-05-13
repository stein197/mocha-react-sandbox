// @ts-check
const assert = require("node:assert");
const ReactSandbox = require("../src/ReactSandbox");

describe("ReactSandbox", () => {
	describe("ReactSandbox.run()", () => {
		it("Context shouldn't have Window API right after sandbox instantiation and before calling run() method", () => {
			const dummy = {};
			const sb = new ReactSandbox(dummy);
			assert.deepStrictEqual(dummy, {});
		});
		it("Should make Window API such as document, window etc.", () => {
			const dummy = {};
			const sb = new ReactSandbox(dummy);
			sb.run(() => {
				assert.ok(dummy.document != null);
				assert.ok(dummy.window != null);
				assert.ok(dummy.File != null);
			});
		});
		it("Should delete Window API after a function execution", () => {
			const dummy = {};
			const sb = new ReactSandbox(dummy);
			sb.run(() => {});
			assert.ok(dummy.document == null);
			assert.ok(dummy.window == null);
			assert.ok(dummy.File == null);
		});
	});
});