// @ts-check
const fs = require("node:fs");
const path = require("node:path");
const jsdom = require("jsdom");
const mimeTypes = require("mime-types");
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

	/**
	 * @returns {jsdom.JSDOM}
	 */
	get dom() {
		return this.__sandbox.dom;
	}

	/**
	 * @param {Sandbox<T>} sandbox
	 */
	constructor(sandbox) {
		this.__sandbox = sandbox;
	}

	/**
	 * @param {HTMLInputElement} input
	 * @param {string[]} paths 
	 */
	upload(input, ...paths) {
		const fileList = [];
		for (const p of paths) {
			const stat = fs.statSync(p);
			fileList.push(new this.__sandbox.dom.window.File([fs.readFileSync(p)], path.basename(p), {
				lastModified: stat.mtimeMs,
				type: mimeTypes.lookup(p) || ""
			}));
		}
		Object.setPrototypeOf(fileList, this.__sandbox.dom.window.FileList.prototype);
		Object.defineProperty(input, "files", {
			value: fileList
		});
		input.dispatchEvent(new this.__sandbox.dom.window.Event("change"));
	}
}
