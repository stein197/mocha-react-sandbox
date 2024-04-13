// @ts-check
const test = require("node:test");
const ReactDOMClient = require("react-dom/client");
const {act} = require("react-dom/test-utils");
const ReactRenderer = require("./ReactRenderer");

module.exports = class ReactContext {

	/**
	 * @private
	 * @type {boolean}
	 */
	__active;

	/**
	 * @private
	 * @type {HTMLDivElement?}
	 */
	__container;

	/**
	 * @private
	 * @readonly
	 * @type {typeof globalThis}
	 */
	__context;

	/**
	 * @private
	 * @type {ReactDOMClient.Root?}
	 */
	__root;

	/**
	 * @returns {HTMLElement}
	 */
	get container() {
		return this.__container;
	}

	/**
	 * @returns {ReactDOMClient.Root}
	 */
	get root() {
		return this.__root;
	}

	/**
	 * @param {typeof globalThis} context
	 */
	constructor(context) {
		this.__context = context;
		test.before(this.__before);
		test.beforeEach(this.__beforeEach);
		test.afterEach(this.__afterEach);
		test.after(this.__after);
	}

	/**
	 * @param {(renderer: ReactRenderer) => void} f
	 * @returns {Promise<void>}
	 */
	run(f) {
		return this.__active ? Promise.resolve() : new Promise(resolve => {
			this.__active = true;
			test.after(() => {
				this.__active = false;
				resolve();
			});
			f(new ReactRenderer(this));
		});
	}

	/**
	 * @private
	 */
	__after = () => {
		delete this.__context.IS_REACT_ACT_ENVIRONMENT;
		this.__container?.remove();
		this.__container = null;
	};

	/**
	 * @private
	 */
	__afterEach = () => {
		act(() => {
			this.__root?.unmount();
			this.__root = null;
		});
	};

	/**
	 * @private
	 */
	__before = () => {
		this.__container = this.__context.window.document.createElement("div");
		this.__context.document.body.appendChild(this.__container);
		this.__context.IS_REACT_ACT_ENVIRONMENT = true;
	};

	/**
	 * @private
	 */
	__beforeEach = () => {
		act(() => void (this.__root = ReactDOMClient.createRoot(this.__container)));
	};
}
