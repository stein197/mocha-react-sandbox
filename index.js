// @ts-check
const ReactSandbox = require("./src/ReactSandbox");
const ReactSandboxFacade = require("./src/ReactSandboxFacade");
const Sandbox = require("./src/Sandbox");
const SandboxFacade = require("./src/SandboxFacade");

/**
 * @param {(sb: ReactSandboxFacade<typeof globalThis>) => void} cb
 * @returns {Promise<void>}
 */
exports.react = function react(cb) {
	const sandbox = new ReactSandbox(globalThis);
	return sandbox.run(cb);
}

/**
 * @param {(sb: SandboxFacade<typeof globalThis>) => void} cb
 * @returns {Promise<void>}
 */
exports.dom = function dom(cb) {
	const sandbox = new Sandbox(globalThis);
	return sandbox.run(cb);
}
