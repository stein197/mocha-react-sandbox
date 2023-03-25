// @ts-check
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
	 * @param {React.ReactNode} node
	 * @returns {Promise<void> | void}
	 */
	render(node) {
		return ReactDOMTestUtils.act(() => {
			if (this.__root)
				this.__root.render(node);
		});
	}

	/**
	 * @param {React.ReactNode} node
	 * @param {Promise<any>} promise
	 */
	async renderAsync(node, promise) {
		await ReactDOMTestUtils.act(async () => {
			await this.render(node);
			try {
				await promise;
			} catch {}
			const setTimeout = this.__mocker.getOriginal("setTimeout") ?? this.__mocker.getMocked("setTimeout") ?? globalThis.setTimeout;
			await new Promise(rs => setTimeout(rs, 0));
		});
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
	__afterEach = () => {
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
