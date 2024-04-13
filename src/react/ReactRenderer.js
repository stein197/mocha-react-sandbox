// @ts-check
const {track} = require("@stein197/util/util");
const {act} = require("react-dom/test-utils");
const React = require("react");
const ReactFacade = require("./ReactFacade");
const ReactContext = require("./ReactContext");

module.exports = class ReactRenderer {

	/**
	 * @private
	 * @readonly
	 * @type {ReactContext}
	 */
	__context;

	/**
	 * @param {ReactContext} context
	 */
	constructor(context) {
		this.__context = context;
	}

	/**
	 * @param {React.ReactElement} component
	 * @returns {ReactFacade}
	 */
	render(component) {
		const tracker = track(component.type);
		act(() => this.__context.root.render(React.createElement(tracker, component.props)));
		return new ReactFacade(this.__context.container, tracker); // TODO: Place it inside act()?
	}
}
