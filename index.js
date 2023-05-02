const Sandbox = require("./src/Sandbox");
const util = require("./src/util");

/**
 * @template {object} T
 * @param {T} context
 * @param {(sb: Sandbox<T>) => void} cb
 * @returns {void}
 */
exports.react = function react(context, cb) {
	const sb = new Sandbox(context);
	cb(sb);
}

exports.track = util.track;
