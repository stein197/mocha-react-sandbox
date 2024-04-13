// @ts-check
const ElementFacade = require("../ElementFacade");

module.exports = class ReactFacade {

	/**
	 * @private
	 * @readonly
	 * @type {HTMLElement}
	 */
	__container;

	/**
	 * @private
	 * @readonly
	 * @type {ReturnType<typeof import("@stein197/util/util").track}
	 */
	__component;

	/**
	 * @param {HTMLElement} container
	 * @param {ReturnType<typeof import("@stein197/util/util").track>} component
	 */
	constructor(container, component) {
		this.__container = container;
		this.__component = component;
	}

	/**
	 * @param {string} selector
	 * @returns {ElementFacade?}
	 */
	find(selector) {
		return new ElementFacade(this.__container).find(selector);
	}

	/**
	 * @param {string} text
	 * @returns {ElementFacade?}
	 */
	findByText(text) {
		return new ElementFacade(this.__container).findByText(text);
	}

	/**
	 * @returns {number}
	 */
	renders() {
		return this.__component.data.length;
	}
}
