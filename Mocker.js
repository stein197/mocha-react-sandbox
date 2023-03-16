// @ts-check

/**
 * @template {object} T
 * @template {keyof T} K
 */
module.exports = class Mocker {

	/**
	 * @type {Partial<T>}
	 * @private
	 */
	__orig = {};

	/**
	 * @type {T}
	 * @private
	 */
	__context;

	/**
	 * @param {T} context
	 */
	constructor(context) {
		this.__context = context;
	}

	/**
	 * @param {K} key
	 * @param {T[K]} implementation
	 * @returns {void}
	 */
	mock(key, implementation) {
		if (!this.__orig[key])
			this.__orig[key] = this.__context[key];
		this.__context[key] = implementation;
	}

	/**
	 * @param {K} key
	 * @returns {void}
	 */
	unmock(key) {
		if (!(key in this.__orig))
			return;
		this.__context[key] = this.__orig[key];
		delete this.__orig[key];
	}

	clean() {
		const keys = Object.keys(this.__orig);
		for (const key of keys)
			this.unmock(key);
	}
}
