// @ts-check
// TODO
const Sandbox = require("./Sandbox");

/**
 * @template {object} T
 */
module.exports = class SandboxFacade {

	/**
	 * @type {Sandbox<T>}
	 * @private
	 */
	__sandbox;

	constructor(sandbox) {
		this.__sandbox = sandbox;
	}

	/**
	 * @param {HTMLInputElement} input
	 * @param {string[]} paths 
	 */
	upload(input, ...paths) {}
}
