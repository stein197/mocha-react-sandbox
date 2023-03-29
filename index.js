const Sandbox = require("./src/Sandbox");

/**
 * @template {object} T
 * @param {T} context
 * @param {(sb: Sandbox<T>) => void} cb
 * @returns {void}
 */
module.exports = function sandbox(context, cb) {
	const sb = new Sandbox(context);
	cb(sb);
}
