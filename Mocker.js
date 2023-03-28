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
		if (!(key in this.__orig))
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
		// @ts-ignore
		this.__context[key] = this.__orig[key];
		delete this.__orig[key];
	}

	/**
	 * @param {K} key
	 * @returns {T[K] | null}
	 */
	getOriginal(key) {
		return this.__orig[key] ?? this.__context[key] ?? null;
	}

	clean() {
		const keys = Object.keys(this.__orig);
		for (const key of keys)
			// @ts-ignore
			this.unmock(key);
	}
}
