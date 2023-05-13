// @ts-check
const jsdom = require("jsdom");
const mocha = require("mocha");
const ReactDOMClient = require("react-dom/client");
const ReactDOMTestUtils = require("react-dom/test-utils");
const Mocker = require("./Mocker");
const ReactSandboxFacade = require("./ReactSandboxFacade");

/**
 * @template T
 */
module.exports = class ReactSandbox {

	/**
	 * @type {ReactDOMClient.Root?}
	 * @private
	 */
	__root;

	/**
	 * @readonly
	 * @type {HTMLDivElement}
	 * @private
	 */
	__container;

	/**
	 * @readonly
	 * @type {T}
	 * @private
	 */
	__context;

	/**
	 * @readonly
	 * @type {string[]}
	 * @private
	 */
	__contextProps;

	/**
	 * @readonly
	 * @type {ReactSandboxFacade<T>}
	 * @private
	 */
	__facade;

	/**
	 * @type {Mocker<T>}
	 * @readonly
	 * @private
	 */
	__mocker;

	/**
	 * @type {jsdom.JSDOM}
	 * @readonly
	 * @private
	 */
	__dom;

	/**
	 * @returns {ReactDOMClient.Root?}
	 */
	get root() {
		return this.__root;
	}

	/**
	 * @returns {HTMLDivElement}
	 */
	get container() {
		return this.__container;
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
		this.__mocker = new Mocker(this.__context);
		this.__dom = new jsdom.JSDOM("", {
			url: "https://localhost"
		});
		this.__contextProps = Object.getOwnPropertyNames(this.__dom.window);
		this.__container = this.__dom.window.document.createElement("div");
		this.__facade = new ReactSandboxFacade(this);
		mocha.before(this.__before);
		mocha.after(this.__after);
		mocha.beforeEach(this.__beforeEach);
		mocha.afterEach(this.__afterEach);
	}

	/**
	 * @param {(sb: ReactSandboxFacade<T>) => void | Promise<void>} f
	 * @returns {Promise<void>}
	 */
	async run(f) {
		this.__setup();
		const result = f(this.__facade);
		if (result instanceof Promise)
			await result;
		this.__teardown();
	}

	/**
	 * @returns {void}
	 * @private
	 */
	__mountRoot() {
		if (this.__root)
			return;
		ReactDOMTestUtils.act(() => {
			this.__root = ReactDOMClient.createRoot(this.__container);
		});
	}

	/**
	 * @returns {void}
	 * @private
	 */
	__unmountRoot() {
		ReactDOMTestUtils.act(() => {
			if (!this.__root)
				return;
			this.__root.unmount();
			this.__root = null;
		});
	}

	/**
	 * @returns {void}
	 * @private
	 */
	__setup() {
		this.__context.IS_REACT_ACT_ENVIRONMENT = true;
		this.__mocker.mock("window", this.__dom.window);
		for (const key of this.__contextProps)
			this.__mocker.mock(key, this.__dom.window[key]);
		this.__mountRoot();
	}

	/**
	 * @returns {void}
	 * @private
	 */
	__teardown() {
		this.__unmountRoot();
		this.__mocker.clean();
		delete this.__context.IS_REACT_ACT_ENVIRONMENT;
	}

	/**
	 * @readonly
	 * @private
	 */
	__beforeEach = () => {
		this.__mountRoot();
	}

	/**
	 * @readonly
	 * @private
	 */
	__afterEach = () => {
		this.__unmountRoot();
	}

	/**
	 * @readonly
	 * @private
	 */
	__before = () => {
		this.__setup();
	}

	/**
	 * @readonly
	 * @private
	 */
	__after = () => {
		this.__teardown();
	}
}
