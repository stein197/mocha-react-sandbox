// @ts-check
const test = require("node:test");
const jsdom = require("jsdom");
const Mocker = require("./Mocker");
const ReactContext = require("./react/ReactContext");
const ReactRenderer = require("./react/ReactRenderer");
const {HOOK_AFTER} = require("./util");

/**
 * @template {object} T
 */
module.exports = class Sandbox {

	/**
	 * @private
	 * @readonly
	 * @type {Sandbox<T>[]}
	 */
	static pool = [];

	/**
	 * @private
	 * @readonly
	 * @type {T}
	 */
	__context;

	/**
	 * @private
	 * @readonly
	 * @type {string[]}
	 */
	__contextProps;

	/**
	 * @private
	 * @readonly
	 * @type {jsdom.JSDOM}
	 */
	__dom;

	/**
	 * @private
	 * @readonly
	 * @type {(() => void)[]}
	 */
	__listeners = [];

	/**
	 * @private
	 * @readonly
	 * @type {Mocker<T>}
	 */
	__mocker;

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
		test.before(this.__before);
		test.after(this.__after);
	}

	/**
	 * @param {(renderer: ReactRenderer) => void} f
	 * @returns {Promise<void>}
	 */
	react(f) {
		return new ReactContext(this.__context).run(f);
	}

	/**
	 * @param {() => void} f
	 */
	[HOOK_AFTER](f) {
		if (this.__listeners.indexOf(f) < 0)
			this.__listeners.push(f);
	}

	/**
	 * @returns {void}
	 * @private
	 */
	__after = () => {
		this.__mocker.clean();
		this.__unregister();
		this.__listeners.forEach(listener => listener());
		this.__listeners.length = 0;
	};

	/**
	 * @returns {void}
	 * @private
	 */
	__before = () => {
		if (this.__isRegistered())
			throw new Error("The current context is already registered. Unregister it first");
		this.__register();
		this.__mocker.mock("window", this.__dom.window); // TODO: Isn't this redundant?
		for (const key of this.__contextProps)
			this.__mocker.mock(key, this.__dom.window[key]);
	};

	/**
	 * @returns {boolean}
	 */
	__isRegistered() {
		return this.constructor.pool.indexOf(this) >= 0;
	}

	__register() {
		this.constructor.pool.push(this);
	}

	__unregister() {
		this.constructor.pool.splice(this.constructor.pool.indexOf(this), 1);
	}
}
