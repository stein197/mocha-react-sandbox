// @ts-check
const assert = require("node:assert");
const mocha = require("mocha");
const jsdom = require("jsdom");
const React = require("react");
const ReactDOMClient = require("react-dom/client");
const ReactDOMTestUtils = require("react-dom/test-utils");
const Mocker = require("./Mocker");
const ElementFacade = require("./ElementFacade");
const util = require("./util");

/**
 * @template T
 */
module.exports = class Sandbox {

	/**
	 * @type {Mocker<T>}
	 * @private
	 */
	__mocker;

	/**
	 * @type {HTMLDivElement}
	 * @private
	 */
	__container;

	/**
	 * @type {ReactDOMClient.Root?}
	 * @private
	 */
	__root;

	/**
	 * @type {T}
	 * @private
	 */
	__context;

	/**
	 * @type {jsdom.JSDOM}
	 * @private
	 */
	__dom;

	/**
	 * @type {string[]}
	 * @private
	 */
	__contextProps;

	/**
	 * @type {[name: string, args: any[]][]}
	 * @private
	 */
	__cmdArray = [];

	/**
	 * @returns {string}
	 */
	get textContent() {
		return this.__container.textContent ?? "";
	}

	/**
	 * @returns {string}
	 */
	get innerHTML() {
		return this.__container.innerHTML;
	}

	/**
	 * @returns {jsdom.JSDOM}
	 */
	get dom() {
		return this.__dom;
	}

	/**
	 * @param {T} context
	 */
	constructor(context) {
		this.__context = context;
		this.__mocker = new Mocker(context);
		this.__dom = new jsdom.JSDOM("", {
			url: "http://localhost"
		});
		this.__container = this.__dom.window.document.createElement("div");
		this.__dom.window.document.body.appendChild(this.__container);
		this.__contextProps = Object.getOwnPropertyNames(this.__dom.window);
		mocha.before(this.__before);
		mocha.after(this.__after);
		mocha.beforeEach(this.__beforeEach);
		mocha.afterEach(this.__afterEach);
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
	 * @param {boolean} atBody
	 * @returns {ElementFacade?}
	 */
	find(selector, atBody = false) {
		return new ElementFacade(atBody ? this.__dom.window.document.body : this.__container).find(selector);
	}

	/**
	 * @param {string} text
	 * @param {boolean} atBody
	 * @returns {ElementFacade?}
	 */
	findByText(text, atBody = false) {
		return new ElementFacade(atBody ? this.__dom.window.document.body : this.__container).findByText(text);
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
		// @ts-ignore
		const setTimeout = this.__mocker.getOriginal("setTimeout") ?? this.__context.setTimeout;
		return this.await(new Promise(resolve => setTimeout(resolve, ms)));
	}

	async run() {
		let tracker;
		for (let i = 0; i < this.__cmdArray.length; i++) {
			const [cmd, args] = this.__cmdArray[i];
			switch (cmd) {
				case "await": {
					const [promise] = args;
					await ReactDOMTestUtils.act(() => promise.then(() => {}).catch(() => {}));
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
						if (!this.__root)
							return;
						this.__root.render(React.createElement(tracker.f, node.props));
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

	/**
	 * @private
	 */
	__beforeEach = () => {
		ReactDOMTestUtils.act(() => {
			this.__root = ReactDOMClient.createRoot(this.__container);
		});
	}

	/**
	 * @private
	 */
	__afterEach = async () => {
		this.__cmdArray = [];
		ReactDOMTestUtils.act(() => {
			if (!this.__root)
				return;
			this.__root.unmount();
			this.__root = null;
		});
	}

	/**
	 * @private
	 */
	__before = () => {
		// @ts-ignore
		this.__context.IS_REACT_ACT_ENVIRONMENT = true
		// @ts-ignore
		this.__mocker.mock("window", this.__dom.window);
		for (const key of this.__contextProps)
			this.__mocker.mock(key, this.__dom.window[key]);
	}

	/**
	 * @private
	 */
	__after = () => {
		this.__root = null;
		this.__mocker.clean();
		// @ts-ignore
		delete this.__context.IS_REACT_ACT_ENVIRONMENT;
	}
}
