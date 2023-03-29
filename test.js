const React = require("react");
const sandbox = require(".");

const setTimeout = globalThis.setTimeout;
const timeout = (ms, result) => new Promise(resolve => setTimeout(() => resolve(result), ms));

function Component1() {
	const [state, setState] = React.useState(0);
	return React.createElement(React.Fragment, null,
		React.createElement("p", null, state),
		React.createElement("button", {onClick: () => setState(prev => ++prev)}, "Click")
	);
}

function Component2({promise}) {
	const [state, setState] = React.useState();
	React.useEffect(() => void promise.then(result => setState(result)), []);
	return React.createElement("div", null, String(state));
}

sandbox(globalThis, sb => {
	it("assert()", () => sb.assert(sb => "String", "String").run());
	it("await()", () => sb.render(React.createElement(Component2, {promise: timeout(100, "Success")})).assert(sb => sb.textContent, "undefined").await(timeout(150)).assert(sb => sb.textContent, "Success").run());
	it("find()", () => sb.render(React.createElement(Component1)).assert(sb => sb.find("p").textContent, "0").run());
	it("findByText()", () => sb.render(React.createElement(Component1)).assert(sb => sb.findByText("Click").textContent, "Click").run());
	it("render()", () => sb.render(React.createElement(Component1)).assert(sb => sb.innerHTML, "<p>0</p><button>Click</button>").run());
	it("simulate()", () => sb.render(React.createElement(Component1)).simulate(sb => sb.find("button"), "click").assert(sb => sb.find("p").textContent, "1"));
});
