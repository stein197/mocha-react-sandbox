const ReactSandbox = require("./src/ReactSandbox");
const Sandbox = require("./src/Sandbox");
const SandboxFacade = require("./src/SandboxFacade");
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

// TODO: Tests
/**
 * @template {object} T
 * @param {T} context
 * @param {(sb: SandboxFacade)} cb
 * @returns {void}
 */
exports.dom = function dom(context, cb) {
	const sandbox = new Sandbox(context);
	sandbox.run(cb);
}

exports.track = util.track;
