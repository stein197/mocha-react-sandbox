// @ts-check
const assert = require("node:assert");
const {describe, it} = require("node:test");
const React = require("react");
const sandbox = require(".");

function Component1() {
	const [state, setState] = React.useState(0);
	return React.createElement(React.Fragment, null,
		React.createElement("p", null, state),
		React.createElement("button", {onClick: () => setState(prev => ++prev)}, "Click")
	);
}

describe("React", () => {
	sandbox(sb => {
		sb.react(facade => {
			it("click()", () => {
				const component = facade.render(React.createElement(Component1));
				assert.equal(component.find("p")?.element.innerHTML, "0");
				component.find("button")?.click();
				assert.equal(component.find("p")?.element.innerHTML, "1");
				component.find("button")?.click();
				assert.equal(component.find("p")?.element.innerHTML, "2");
			});
			it("find()", () => {
				const component = facade.render(React.createElement(Component1));
				assert.notEqual(component.find("p"), null);
				assert.equal(component.find("button")?.element.textContent, "Click");
			});
			it("findByText()", () => {
				const component = facade.render(React.createElement(Component1));
				assert.notEqual(component.findByText("Click"), null);
				assert.equal(component.findByText("Click")?.element.tagName.toLowerCase(), "button");
			});
			it("rerenders()", () => {
				const component = facade.render(React.createElement(Component1));
				assert.equal(component.renders(), 1);
				component.find("button").click();
				assert.equal(component.renders(), 2);
				component.find("button").click();
				assert.equal(component.renders(), 3);
			});
		});
	});
});

describe("DOM", () => {
	sandbox(sb => {
		it("Should mock global variables", () => {
			assert.ok(document != null);
			assert.ok(window != null);
			assert.ok(File != null);
		});
		it("Global document should be the same as the sandbox dom's one", () => {
			assert.ok(document === sb.dom.window.document);
		});
	});
});
