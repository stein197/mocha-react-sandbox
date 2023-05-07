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

/**
 * @param {(sb: SandboxFacade<typeof globalThis>)} cb
 * @returns {void}
 */
exports.dom = function dom(cb) {
	const sandbox = new Sandbox(globalThis);
	sandbox.run(cb);
}

exports.track = util.track;
