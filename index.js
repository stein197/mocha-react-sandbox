const ReactSandbox = require("./src/ReactSandbox");
const util = require("./src/util");

/**
 * @template {object} T
 * @param {T} context
 * @param {(sb: ReactSandbox<T>) => void} cb
 * @returns {void}
 */
exports.react = function react(context, cb) {
	const sb = new ReactSandbox(context);
	cb(sb);
}

exports.track = util.track;
