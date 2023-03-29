// @ts-check
const assert = require("node:assert");
const mocha = require("mocha");
const jsdom = require("jsdom");
const React = require("react");
const ReactDOMClient = require("react-dom/client");
const ReactDOMTestUtils = require("react-dom/test-utils");
const Mocker = require("./Mocker");
const ElementFacade = require("./ElementFacade");

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
	 * @type {[string, ...any[]][]}
	 * @private
	 */
	__commands = [];

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
		this.__contextProps = Object.keys(this.__dom.window);
		mocha.before(this.__before);
		mocha.after(this.__after);
		mocha.beforeEach(this.__beforeEach);
		mocha.afterEach(this.__afterEach);
	}

	/**
	 * @template T
	 * @param {(sandbox: this) => T} f
	 * @param {T} actual
	 * @returns {this}
	 */
	assert(f, actual) {
		this.__commands.push(["assert", ...arguments]);
		return this;
	}

	/**
	 * @param {Promise<any>} promise
	 * @returns {this}
	 */
	await(promise) {
		this.__commands.push(["await", promise]);
		return this;
	}

	/**
	 * @param {string} selector
	 * @returns {ElementFacade?}
	 */
	find(selector) {
		return new ElementFacade(this.__container).find(selector);
	}

	/**
	 * @param {string} text
	 * @returns {ElementFacade?}
	 */
	findByText(text) {
		return new ElementFacade(this.__container).findByText(text);
	}

	/**
	 * @param {React.ReactNode} node
	 * @returns {this}
	 */
	render(node) {
		this.__commands.push(["render", ...arguments]);
		return this;
	}

	async run() {
		const setTimeout = this.__mocker.getOriginal("setTimeout") ?? this.__context.setTimeout;
		for (const [cmd, ...args] of this.__commands) {
			switch (cmd) {
				case "render": {
					const [node] = args;
					ReactDOMTestUtils.act(() => {
						if (this.__root)
							this.__root.render(node);
					});
					break;
				}
				case "simulate": {
					const [f, event, data] = args;
					ReactDOMTestUtils.act(() => {
						ReactDOMTestUtils.Simulate[event](f(this).element, data);
					});
					break;
				}
				case "assert": {
					const [f, actual] = args;
					assert.equal(f(this), actual);
					break;
				}
				case "timeout": {
					const [ms] = args;
					await ReactDOMTestUtils.act(() => new Promise(resolve => setTimeout(resolve, ms)));
					break;
				}
				case "await": {
					const [promise] = args;
					await promise;
					break;
				}
			}
		}
	}

	/**
	 * @param {(sandbox: this) => ElementFacade} f
	 * @param {keyof typeof ReactDOMTestUtils.Simulate} event
	 * @param {ReactDOMTestUtils.SyntheticEventData} [data]
	 * @returns {this}
	 */
	simulate(f, event, data) {
		this.__commands.push(["simulate", ...arguments]);
		return this;
	}

	/**
	 * @param {number} ms
	 * @returns {this}
	 */
	timeout(ms) {
		this.__commands.push(["timeout", ...arguments]);
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
		// await this.__run();
		this.__commands = [];
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