// @ts-check
const ReactDOMTestUtils = require("react-dom/test-utils");

module.exports = class ElementFacade {

	/**
	 * @type {HTMLElement}
	 * @private
	 */
	__element;

	constructor(element) {
		this.__element = element;
	}

	/**
	 * @param {string} selector
	 * @returns {ElementFacade?}
	 */
	find(selector) {
		const element = this.__element.querySelector(selector);
		return element ? new ElementFacade(element) : null;
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	abort(data) {
		return this.__dispatchEvent("abort", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	animationEnd(data) {
		return this.__dispatchEvent("animationEnd", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	animationIteration(data) {
		return this.__dispatchEvent("animationIteration", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	animationStart(data) {
		return this.__dispatchEvent("animationStart", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	blur(data) {
		return this.__dispatchEvent("blur", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	canPlay(data) {
		return this.__dispatchEvent("canPlay", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	canPlayThrough(data) {
		return this.__dispatchEvent("canPlayThrough", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	change(data) {
		return this.__dispatchEvent("change", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	click(data) {
		return this.__dispatchEvent("click", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	compositionEnd(data) {
		return this.__dispatchEvent("compositionEnd", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	compositionStart(data) {
		return this.__dispatchEvent("compositionStart", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	compositionUpdate(data) {
		return this.__dispatchEvent("compositionUpdate", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	contextMenu(data) {
		return this.__dispatchEvent("contextMenu", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	copy(data) {
		return this.__dispatchEvent("copy", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	cut(data) {
		return this.__dispatchEvent("cut", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	doubleClick(data) {
		return this.__dispatchEvent("doubleClick", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	drag(data) {
		return this.__dispatchEvent("drag", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	dragEnd(data) {
		return this.__dispatchEvent("dragEnd", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	dragEnter(data) {
		return this.__dispatchEvent("dragEnter", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	dragExit(data) {
		return this.__dispatchEvent("dragExit", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	dragLeave(data) {
		return this.__dispatchEvent("dragLeave", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	dragOver(data) {
		return this.__dispatchEvent("dragOver", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	dragStart(data) {
		return this.__dispatchEvent("dragStart", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	drop(data) {
		return this.__dispatchEvent("drop", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	durationChange(data) {
		return this.__dispatchEvent("durationChange", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	emptied(data) {
		return this.__dispatchEvent("emptied", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	encrypted(data) {
		return this.__dispatchEvent("encrypted", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	ended(data) {
		return this.__dispatchEvent("ended", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	error(data) {
		return this.__dispatchEvent("error", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	focus(data) {
		return this.__dispatchEvent("focus", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	input(data) {
		return this.__dispatchEvent("input", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	invalid(data) {
		return this.__dispatchEvent("invalid", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	keyDown(data) {
		return this.__dispatchEvent("keyDown", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	keyPress(data) {
		return this.__dispatchEvent("keyPress", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	keyUp(data) {
		return this.__dispatchEvent("keyUp", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	load(data) {
		return this.__dispatchEvent("load", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	loadStart(data) {
		return this.__dispatchEvent("loadStart", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	loadedData(data) {
		return this.__dispatchEvent("loadedData", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	loadedMetadata(data) {
		return this.__dispatchEvent("loadedMetadata", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	mouseDown(data) {
		return this.__dispatchEvent("mouseDown", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	mouseEnter(data) {
		return this.__dispatchEvent("mouseEnter", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	mouseLeave(data) {
		return this.__dispatchEvent("mouseLeave", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	mouseMove(data) {
		return this.__dispatchEvent("mouseMove", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	mouseOut(data) {
		return this.__dispatchEvent("mouseOut", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	mouseOver(data) {
		return this.__dispatchEvent("mouseOver", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	mouseUp(data) {
		return this.__dispatchEvent("mouseUp", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	paste(data) {
		return this.__dispatchEvent("paste", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	pause(data) {
		return this.__dispatchEvent("pause", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	play(data) {
		return this.__dispatchEvent("play", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	playing(data) {
		return this.__dispatchEvent("playing", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	progress(data) {
		return this.__dispatchEvent("progress", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	rateChange(data) {
		return this.__dispatchEvent("rateChange", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	scroll(data) {
		return this.__dispatchEvent("scroll", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	seeked(data) {
		return this.__dispatchEvent("seeked", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	seeking(data) {
		return this.__dispatchEvent("seeking", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	select(data) {
		return this.__dispatchEvent("select", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	stalled(data) {
		return this.__dispatchEvent("stalled", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	submit(data) {
		return this.__dispatchEvent("submit", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	suspend(data) {
		return this.__dispatchEvent("suspend", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	timeUpdate(data) {
		return this.__dispatchEvent("timeUpdate", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	touchCancel(data) {
		return this.__dispatchEvent("touchCancel", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	touchEnd(data) {
		return this.__dispatchEvent("touchEnd", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	touchMove(data) {
		return this.__dispatchEvent("touchMove", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	touchStart(data) {
		return this.__dispatchEvent("touchStart", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	transitionEnd(data) {
		return this.__dispatchEvent("transitionEnd", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	volumeChange(data) {
		return this.__dispatchEvent("volumeChange", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	waiting(data) {
		return this.__dispatchEvent("waiting", data);
	}

	/**
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 */
	wheel(data) {
		return this.__dispatchEvent("wheel", data);
	}

	/**
	 * @param {keyof typeof ReactDOMTestUtils.Simulate} event
	 * @param {typeof ReactDOMTestUtils.SyntheticEventData?} data
	 * @returns {Promise<void>}
	 * @private
	 */
	__dispatchEvent(event, data) {
		return ReactDOMTestUtils.act(async () => {
			ReactDOMTestUtils.Simulate[event](this.__element, data);
		});
	}
}