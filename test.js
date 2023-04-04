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

function Component3() {
	const [state, setState] = React.useState(0);
	React.useEffect(() => void setTimeout(() => setState(1), 100), []);
	return React.createElement("p", null, state);
}

sandbox(globalThis, sb => {
	it("await()", () => sb.render(React.createElement(Component2, {promise: timeout(100, "Success")})).equals(sb => sb.textContent, "undefined").await(timeout(150)).equals(sb => sb.textContent, "Success").run());
	it("do()", () => {
		let a = 0;
		return sb.render(React.createElement(Component1)).do(() => a++).equals(() => a, 1).run();
	});
	it("equals()", () => sb.equals(sb => "String", "String").run());
	it("find()", () => sb.render(React.createElement(Component1)).equals(sb => sb.find("p").textContent, "0").run());
	it("findByText()", () => sb.render(React.createElement(Component1)).equals(sb => sb.findByText("Click").textContent, "Click").run());
	it("render()", () => sb.render(React.createElement(Component1)).equals(sb => sb.innerHTML, "<p>0</p><button>Click</button>").run());
	it("rerenders()", () => sb.render(React.createElement(Component1)).rerenders(1).simulate(sb => sb.find("button"), "click").rerenders(2).run());
	it("simulate()", () => sb.render(React.createElement(Component1)).simulate(sb => sb.find("button"), "click").equals(sb => sb.find("p").textContent, "1"));
	it("timeout()", () => sb.render(React.createElement(Component3)).equals(sb => sb.find("p").textContent, "0").timeout(150).equals(sb => sb.find("p").textContent, "1").run());
});
