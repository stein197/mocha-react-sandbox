const assert = require("node:assert");
const Sandbox = require("../src/Sandbox");

describe("SandboxFacade", () => {
	describe("SandboxFacade.upload()", () => {
		it("Should correctly upload a single file", () => {
			const dummy = {};
			const sb = new Sandbox(dummy);
			sb.run(facade => {
				dummy.document.body.innerHTML = "<input type=\"file\" />";
				const input = dummy.document.body.querySelector("input");
				facade.upload(input, "test.js");
			});
			assert.equal(sb.dom.window.document.querySelector("input").files.length, 1);
			assert.deepStrictEqual(sb.dom.window.document.querySelector("input").files[0].name, "test.js");
		});
		it("Should correctly upload an array of files", () => {
			const dummy = {};
			const sb = new Sandbox(dummy);
			sb.run(facade => {
				dummy.document.body.innerHTML = "<input type=\"file\" />";
				const input = dummy.document.body.querySelector("input");
				facade.upload(input, "test.js", "index.js");
			});
			assert.equal(sb.dom.window.document.querySelector("input").files.length, 2);
			assert.deepStrictEqual(sb.dom.window.document.querySelector("input").files[1].name, "index.js");
		});
	});
});