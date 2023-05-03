const jsdom = require("jsdom");
const Mocker = require("./Mocker");

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
	 * @returns {jsdom.JSODM}
	 */
	get dom() {
		return this.__dom;
	}

	constructor(context) {
		this.__context = context;
		this.__contextProps = Object.getOwnPropertyNames(context);
		this.__mocker = new Mocker(context);
		this.__dom = new jsdom.JSDOM();
	}
}