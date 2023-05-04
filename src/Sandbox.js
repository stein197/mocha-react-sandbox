// @ts-check
const jsdom = require("jsdom");
const SandboxFacade = require("./SandboxFacade");
const Mocker = require("./Mocker");

/**
 * @template {object} T
 */
module.exports = class Sandbox {

	/**
	 * @type {Mocker<T>}
	 * @readonly
	 * @private
	 */
	__mocker;

	/**
	 * @type {T}
	 * @readonly
	 * @private
	 */
	__context;

	/**
	 * @type {jsdom.JSDOM}
	 * @readonly
	 * @private
	 */
	__dom;

	/**
	 * @type {string[]}
	 * @readonly
	 * @private
	 */
	__contextProps;

	/**
	 * @type {SandboxFacade<T>}
	 * @readonly
	 * @private
	 */
	__facade;

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
			url: "https://localhost/"
		});
		this.__contextProps = Object.getOwnPropertyNames(this.__dom.window);
		this.__facade = new SandboxFacade(this);
	}

	/**
	 * @param {(sb: SandboxFacade<T>) => void} f
	 * @returns {void}
	 */
	run(f) {
		this.__setup();
		f(this.__facade);
		this.__teardown();
	}

	/**
	 * @returns {void}
	 * @private
	 */
	__setup() {
		this.__mocker.mock("window", this.__dom.window);
		for (const key of this.__contextProps)
			this.__mocker.mock(key, this.__dom.window[key]);
	}

	/**
	 * @returns {void}
	 * @private
	 */
	__teardown() {
		this.__mocker.clean();
	}
}
