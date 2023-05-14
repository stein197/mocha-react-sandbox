// @ts-check
const jsdom = require("jsdom");
const mocha = require("mocha");
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
	 * @type {boolean}
	 * @private
	 */
	__active = false;

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
		mocha.before(this.__before);
		mocha.after(this.__after);
	}

	/**
	 * @param {(sb: SandboxFacade<T>) => void | Promise<void>} f
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
	__setup() {
		if (this.__active)
			return;
		this.__active = true;
		this.__mocker.mock("window", this.__dom.window);
		for (const key of this.__contextProps)
			this.__mocker.mock(key, this.__dom.window[key]);
	}

	/**
	 * @returns {void}
	 * @private
	 */
	__teardown() {
		if (!this.__active)
			return;
		this.__mocker.clean();
		this.__active = false;
	}

	/**
	 * @readonly
	 * @private
	 * @returns {void}
	 */
	__before = () => {
		this.__setup();
	}

	/**
	 * @readonly
	 * @private
	 * @returns {void}
	 */
	__after = () => {
		this.__teardown();
	}
}
