const React = require("react");
const sandbox = require(".");

function Component1() {
	return React.createElement("div", null, "Hello, World!");
}

sandbox(globalThis, sb => {
	it("assert()", () => sb.assert(sb => "String", "String").run());
	it.skip("await()", () => {});
	it.skip("find()", () => {});
	it.skip("findByText()", () => {});
	it("render()", () => sb.render(React.createElement(Component1)).assert(sb => sb.innerHTML, "<div>Hello, World!</div>").run());
	it.skip("simulate()", () => {});
	it.skip("timeout()", () => {});
	it("Complex behavior", () => {});
});
