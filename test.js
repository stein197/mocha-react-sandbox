const React = require("react");
const sandbox = require(".");

function Component1() {
	return React.createElement("div", null, "Hello, World!");
}

sandbox(globalThis, sb => {
	describe("assert()", () => {
		it("Success", () => sb.assert(sb => "String", "String").run());
		it("Fail", () => sb.assert(sb => "String", "Number").run());
	});
	describe("await()", () => {
		it.skip("Success", () => {});
		it.skip("Fail", () => {});
	});
	describe("find()", () => {
		it.skip("Success", () => {});
		it.skip("Fail", () => {});
	});
	describe("findByText()", () => {
		it.skip("Success", () => {});
		it.skip("Fail", () => {});
	});
	describe("render()", () => {
		it("Success", () => sb.render(React.createElement(Component1)).assert(sb => sb.innerHTML, "<div>Hello, World!</div>").run());
		it("Fail", () => sb.render(React.createElement(Component1)).assert(sb => sb.innerHTML, "").run());
	});
	describe("simulate()", () => {
		it.skip("Success", () => {});
		it.skip("Fail", () => {});
	});
	describe("timeout()", () => {
		it.skip("Success", () => {});
		it.skip("Fail", () => {});
	});
	describe("Complex behavior", () => {});
});
