const React = require("react");
const sandbox = require(".");

function Component1() {
	const [state, setState] = React.useState(0);
	return React.createElement(React.Fragment, null,
		React.createElement("p", null, state),
		React.createElement("button", {onClick: () => setState(prev => ++prev)}, "Click")
	);
}

sandbox(globalThis, sb => {
	it("assert()", () => sb.assert(sb => "String", "String").run());
	it.skip("await()", () => {});
	it("find()", () => sb.render(React.createElement(Component1)).assert(sb => sb.find("p").textContent, "0").run());
	it("findByText()", () => sb.render(React.createElement(Component1)).assert(sb => sb.findByText("Click").textContent, "Click").run());
	it("render()", () => sb.render(React.createElement(Component1)).assert(sb => sb.innerHTML, "<p>0</p><button>Click</button>").run());
	it("simulate()", () => sb.render(React.createElement(Component1)).simulate(sb => sb.find("button"), "click").assert(sb => sb.find("p").textContent, "1"));
	it.skip("timeout()", () => {});
	it("Complex behavior", () => {});
});
