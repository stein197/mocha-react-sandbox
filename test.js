const assert = require("node:assert");
const React = require("react");
const sandbox = require(".");

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

describe.skip("sandbox.react()", () => {
	sandbox.react(sb => {
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
		it("timeout()", () => sb.render(React.createElement(Component3)).equals(sb => sb.find("p").textContent, "0PIZDA").timeout(150).equals(sb => sb.find("p").textContent, "1").run());
		it("Should override Window API", () => {
			try {
				document;
				window;
				File;
				assert.ok(true);
			} catch {
				assert.fail();
			}
		});
	});
});

describe("sandbox.dom()", () => {
	sandbox.dom(sb => {
		it("Should mock global variables such as document, window etc.", () => {
			assert.ok(document != null);
			assert.ok(window != null);
			assert.ok(File != null);
		});
		it("Global document should be the same as the sandbox dom's one", () => {
			assert.ok(document === sb.dom.window.document);
		});
		describe("upload()", () => {
			it("Should correctly upload a single file", () => {
				document.body.innerHTML = "<input type=\"file\" />";
				sb.upload(document.body.querySelector("input"), "test.js");
				assert.equal(document.body.querySelector("input").files.length, 1);
				assert.deepStrictEqual(document.body.querySelector("input").files[0].name, "test.js");
			});
			it("Should correctly upload an array of files", () => {
				document.body.innerHTML = "<input type=\"file\" />";
				sb.upload(document.body.querySelector("input"), "test.js", "index.js");
				assert.equal(document.body.querySelector("input").files.length, 2);
				assert.deepStrictEqual(document.body.querySelector("input").files[1].name, "index.js");
			});
		});
	});
	it("Should correctly work outside Mocha environment", () => {
		return sandbox.dom(sb => {
			assert.ok(window);
			assert.ok(document);
			assert.ok(File);
			document.body.innerHTML = "<input type=\"file\" />";
			sb.upload(document.body.querySelector("input"), "test.js");
			assert.equal(document.body.querySelector("input").files.length, 1);
			assert.deepStrictEqual(document.body.querySelector("input").files[0].name, "test.js");
		});
	});
});
