// @ts-check
const assert = require("node:assert");
const jsdom = require("jsdom");
const React = require("react");
const ReactDOMTestUtils = require("react-dom/test-utils");
const ReactSandbox = require("./ReactSandbox");
const ElementFacade = require("./ElementFacade");
const util = require("./util");

/**
 * @template {object} T
 */
module.exports = class ReactSandboxFacade {

	/**
	 * @readonly
	 * @type {[name: string, args: any[]][]}
	 * @private
	 */
	__cmdArray = [];

	/**
	 * @readonly
	 * @type {ReactSandbox<T>}
	 * @private
	 */
	__sandbox;

	/**
	 * @returns {jsdom.JSDOM}
	 */
	get dom() {
		return this.__sandbox.dom;
	}

	/**
	 * @param {ReactSandbox<T>} sandbox
	 */
	constructor(sandbox) {
		this.__sandbox = sandbox;
	}

	/**
	 * @param {Promise<any>} promise
	 * @returns {this}
	 */
	await(promise) {
		return this.__addCmd("await", [promise]);
	}

	/**
	 * @param {() => void | Promise<void>} f
	 * @returns {this}
	 */
	do(f) {
		return this.__addCmd("do", [f]);
	}

	/**
	 * @template T
	 * @param {(sandbox: this) => T} f
	 * @param {T} actual
	 * @returns {this}
	 */
	equals(f, actual) {
		return this.__addCmd("equals", [f, actual]);
	}

	/**
	 * @param {string} selector
	 * @returns {ElementFacade?}
	 */
	find(selector) {
		return new ElementFacade(this.__sandbox.container).find(selector);
	}

	/**
	 * @param {string} text
	 * @returns {ElementFacade?}
	 */
	findByText(text) {
		return new ElementFacade(this.__sandbox.container).findByText(text);
	}

	/**
	 * @param {React.ReactNode} node
	 * @returns {this}
	 */
	render(node) {
		return this.__addCmd("render", [node]);
	}

	/**
	 * @param {number} count
	 * @returns {this}
	 */
	rerenders(count) {
		return this.__addCmd("rerenders", [count]);
	}

	/**
	 * @param {(sandbox: this) => ElementFacade} f
	 * @param {keyof typeof ReactDOMTestUtils.Simulate} event
	 * @param {ReactDOMTestUtils.SyntheticEventData} [data]
	 * @returns {this}
	 */
	simulate(f, event, data) {
		return this.__addCmd("simulate", [f, event, data]);
	}

	/**
	 * @param {number} ms
	 * @returns {this}
	 */
	timeout(ms) {
		return this.await(new Promise(resolve => setTimeout(resolve, ms)));
	}

	async run() {
		let tracker;
		for (let i = 0; i < this.__cmdArray.length; i++) {
			const [cmd, args] = this.__cmdArray[i];
			switch (cmd) {
				case "await": {
					const [promise] = args;
					await ReactDOMTestUtils.act(async () => {
						try {
							await promise;
						} catch {}
					});
					break;
				}
				case "do": {
					const [f] = args;
					await ReactDOMTestUtils.act(f);
					break;
				}
				case "equals": {
					const [f, actual] = args;
					assert.equal(f(this), actual);
					break;
				}
				case "render": {
					const [node] = args;
					const nodeType = node.type;
					tracker = util.track(nodeType);
					ReactDOMTestUtils.act(() => {
						if (!this.__sandbox.root)
							return;
						this.__sandbox.root.render(React.createElement(tracker.f, node.props));
					});
					break;
				}
				case "rerenders": {
					if (!tracker)
						continue;
					const [count] = args;
					assert.equal(tracker.calls, count, `Expected rerenders: ${count}, actual: ${tracker.calls}`);
					break;
				}
				case "simulate": {
					const [f, event, data] = args;
					ReactDOMTestUtils.act(() => {
						ReactDOMTestUtils.Simulate[event](f(this).element, data);
					});
					break;
				}
			}
		}
		this.__cmdArray.length = 0;
	}

	/**
	 * @param {string} cmd
	 * @param {any[]} args
	 * @returns {this}
	 * @private
	 */
	__addCmd(cmd, args) {
		this.__cmdArray.push([cmd, args]);
		return this;
	}
}
