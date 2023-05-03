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
	 * @type {boolean}
	 * @private
	 */
	__forbidExisting;

	/**
	 * @return {T}
	 */
	get context() {
		return this.__context;
	}

	/**
	 * @param {T} context
	 * @param {boolean} forbidExisting
	 */
	constructor(context, forbidExisting = true) {
		this.__context = context;
		this.__forbidExisting = forbidExisting
	}

	/**
	 * @param {K} key
	 * @param {T[K]} implementation
	 * @returns {void}
	 */
	mock(key, implementation) {
		if (this.__forbidExisting && key in this.__context)
			return;
		if (!(key in this.__orig))
			this.__orig[key] = this.__context[key];
		try {
			this.__context[key] = implementation;
		} catch {
			delete this.__orig[key];
		}
	}

	/**
	 * @param {K} key
	 * @returns {void}
	 */
	unmock(key) {
		if (!(key in this.__orig) || this.__forbidExisting && key in this.__context)
			return;
		try {
			// @ts-ignore
			this.__context[key] = this.__orig[key];
		} finally {
			delete this.__orig[key];
		}
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
