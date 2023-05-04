// @ts-check

/**
 * @template {object} T
 * @template {keyof T} K
 */
module.exports = class Mocker {

	/**
	 * @type {Partial<T>}
	 * @readonly
	 * @private
	 */
	__orig = {};

	/**
	 * @type {T}
	 * @readonly
	 * @private
	 */
	__context;

	/**
	 * @type {boolean}
	 * @readonly
	 * @private
	 */
	__allowOverride;

	/**
	 * @type {string[]}
	 * @readonly
	 * @private
	 */
	__deleteableProps = [];

	/**
	 * @return {T}
	 */
	get context() {
		return this.__context;
	}

	/**
	 * @param {T} context
	 * @param {boolean} allowOverride
	 */
	constructor(context, allowOverride = false) {
		this.__context = context;
		this.__allowOverride = allowOverride;
	}

	/**
	 * @param {K} key
	 * @param {T[K]} impl
	 * @returns {void}
	 */
	mock(key, impl) {
		if (!this.__isOverrideable(key))
			return;
		try {
			this.__trySaveDeleteable(key);
			this.__trySaveOriginal(key);
			this.__context[key] = impl;
		} catch {
			this.__restore(key);
		}
	}

	/**
	 * @param {K} key
	 * @returns {void}
	 */
	unmock(key) {
		if (!this.__isOverrideable(key))
			return;
		this.__restore(key);
	}

	/**
	 * @param {K} key
	 * @returns {T[K] | null}
	 */
	getOriginal(key) {
		return this.__orig[key] ?? this.__context[key] ?? null;
	}

	/**
	 * @returns {void}
	 */
	clean() {
		for (const key in this.__orig)
			this.unmock(key);
	}

	/**
	 * @param {K} key
	 * @returns {boolean}
	 * @private
	 */
	__isOverrideable(key) {
		return this.__allowOverride || !(key in this.__context) && !(key in this.__orig) || key in this.__orig;
	}

	/**
	 * @param {K} key
	 * @returns {void}
	 * @private
	 */
	__trySaveOriginal(key) {
		if (!(key in this.__orig))
			this.__orig[key] = this.__context[key];
	}
	
	/**
	 * @param {K} key 
	 * @returns {void}
	 * @private
	 */
	__trySaveDeleteable(key) {
		if (!(key in this.__context) && !(key in this.__orig) && !this.__deleteableProps.includes(key))
			this.__deleteableProps.push(key);
	}

	__restore(key) {
		const keyIndex = this.__deleteableProps.indexOf(key);
		if (keyIndex >= 0) {
			this.__deleteableProps.splice(keyIndex, 1);
			delete this.__context[key];
		} else if (key in this.__context) {
			this.__context[key] = this.__orig[key];
			delete this.__orig[key];
		}
	}
}
