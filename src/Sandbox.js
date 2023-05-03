const jsdom = require("jsdom");
const SandboxFacade = require("./SandboxFacade");
const Mocker = require("./Mocker");

/**
 * @template {object} T
 */
module.exports = class Sandbox {

	/**
	 * @type {Mocker<T>}
	 * @private
	 */
	__mocker;

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
	 * @type {SandboxFacade<T>}
	 * @private
	 */
	__facade;

	/**
	 * @returns {jsdom.JSODM}
	 */
	get dom() {
		return this.__dom;
	}

	/**
	 * @param {T} context
	 */
	constructor(context) {
		this.__context = context;
		this.__contextProps = Object.getOwnPropertyNames(context);
		this.__mocker = new Mocker(context);
		this.__dom = new jsdom.JSDOM();
		this.__facade = new SandboxFacade(this);
	}

	/**
	 * @param {(sb: SandboxFacade) => void} f
	 * @returns {void}
	 */
	run(f) {}
}
