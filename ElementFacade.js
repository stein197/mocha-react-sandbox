// @ts-check

module.exports = class ElementFacade {

	/**
	 * @type {HTMLElement}
	 * @private
	 */
	__element;

	/**
	 * @returns {string}
	 */
	get textContent() {
		return this.__element.textContent ?? "";
	}

	/**
	 * @returns {string}
	 */
	get innerHTML() {
		return this.__element.innerHTML;
	}

	constructor(element) {
		this.__element = element;
	}

	/**
	 * @param {string} selector
	 * @returns {ElementFacade?}
	 */
	find(selector) {
		const element = this.__element.querySelector(selector);
		return element ? new ElementFacade(element) : null;
	}

	/**
	 * @param {string} text
	 * @returns {ElementFacade?}
	 */
	findByText(text) {
		if (this.__element.textContent === text)
			return new ElementFacade(this.__element);
		for (const child of [...this.__element.children]) {
			const element = new ElementFacade(child).findByText(text);
			if (element)
				return element;
		}
		return null;
	}
}
