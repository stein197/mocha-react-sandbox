// @ts-check
const Sandbox = require("./src/Sandbox");
const {HOOK_AFTER} = require("./src/util");

/**
 * @param {(sb: Sandbox<typeof globalThis>) => void} f
 * @returns {Promise<void>}
 */
module.exports = function sandbox(f) {
	return new Promise(resolve => {
		const sb = new Sandbox(globalThis);
		sb[HOOK_AFTER](resolve);
		f(new Sandbox(globalThis));
	});
}
