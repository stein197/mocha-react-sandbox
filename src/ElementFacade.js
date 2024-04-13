// @ts-check
const {act, Simulate} = require("react-dom/test-utils");

module.exports = class ElementFacade {

	/**
	 * @private
	 * @readonly
	 * @type {HTMLElement}
	 */
	__element;

	/**
	 * @returns {HTMLElement}
	 */
	get element() {
		return this.__element;
	}

	/**
	 * @returns {string}
	 */
	get textContent() {
		return this.__element.textContent ?? "";
	}

	/**
	 * @returns {string}
	 */
	get innerHTML() {
		return this.__element.innerHTML;
	}

	/**
	 * @param {HTMLElement} element
	 */
	constructor(element) {
		this.__element = element;
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	abort(data) {
		act(() => Simulate.abort(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	animationEnd(data) {
		act(() => Simulate.animationEnd(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	animationIteration(data) {
		act(() => Simulate.animationIteration(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	animationStart(data) {
		act(() => Simulate.animationStart(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	blur(data) {
		act(() => Simulate.blur(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	cancel(data) {
		act(() => Simulate.cancel(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	canPlay(data) {
		act(() => Simulate.canPlay(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	canPlayThrough(data) {
		act(() => Simulate.canPlayThrough(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	change(data) {
		act(() => Simulate.change(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	click(data) {
		act(() => Simulate.click(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	close(data) {
		act(() => Simulate.close(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	compositionEnd(data) {
		act(() => Simulate.compositionEnd(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	compositionStart(data) {
		act(() => Simulate.compositionStart(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	compositionUpdate(data) {
		act(() => Simulate.compositionUpdate(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	contextMenu(data) {
		act(() => Simulate.contextMenu(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	copy(data) {
		act(() => Simulate.copy(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	cut(data) {
		act(() => Simulate.cut(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	auxClick(data) {
		act(() => Simulate.auxClick(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	doubleClick(data) {
		act(() => Simulate.doubleClick(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	drag(data) {
		act(() => Simulate.drag(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	dragEnd(data) {
		act(() => Simulate.dragEnd(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	dragEnter(data) {
		act(() => Simulate.dragEnter(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	dragExit(data) {
		act(() => Simulate.dragExit(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	dragLeave(data) {
		act(() => Simulate.dragLeave(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	dragOver(data) {
		act(() => Simulate.dragOver(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	dragStart(data) {
		act(() => Simulate.dragStart(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	drop(data) {
		act(() => Simulate.drop(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	durationChange(data) {
		act(() => Simulate.durationChange(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	emptied(data) {
		act(() => Simulate.emptied(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	encrypted(data) {
		act(() => Simulate.encrypted(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	ended(data) {
		act(() => Simulate.ended(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	error(data) {
		act(() => Simulate.error(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	focus(data) {
		act(() => Simulate.focus(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	input(data) {
		act(() => Simulate.input(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	invalid(data) {
		act(() => Simulate.invalid(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	keyDown(data) {
		act(() => Simulate.keyDown(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	keyPress(data) {
		act(() => Simulate.keyPress(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	keyUp(data) {
		act(() => Simulate.keyUp(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	load(data) {
		act(() => Simulate.load(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	loadStart(data) {
		act(() => Simulate.loadStart(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	loadedData(data) {
		act(() => Simulate.loadedData(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	loadedMetadata(data) {
		act(() => Simulate.loadedMetadata(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	mouseDown(data) {
		act(() => Simulate.mouseDown(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	mouseEnter(data) {
		act(() => Simulate.mouseEnter(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	mouseLeave(data) {
		act(() => Simulate.mouseLeave(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	mouseMove(data) {
		act(() => Simulate.mouseMove(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	mouseOut(data) {
		act(() => Simulate.mouseOut(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	mouseOver(data) {
		act(() => Simulate.mouseOver(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	mouseUp(data) {
		act(() => Simulate.mouseUp(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	paste(data) {
		act(() => Simulate.paste(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	pause(data) {
		act(() => Simulate.pause(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	play(data) {
		act(() => Simulate.play(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	playing(data) {
		act(() => Simulate.playing(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	progress(data) {
		act(() => Simulate.progress(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	pointerCancel(data) {
		act(() => Simulate.pointerCancel(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	pointerDown(data) {
		act(() => Simulate.pointerDown(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	pointerUp(data) {
		act(() => Simulate.pointerUp(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	pointerMove(data) {
		act(() => Simulate.pointerMove(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	pointerOut(data) {
		act(() => Simulate.pointerOut(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	pointerOver(data) {
		act(() => Simulate.pointerOver(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	pointerEnter(data) {
		act(() => Simulate.pointerEnter(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	pointerLeave(data) {
		act(() => Simulate.pointerLeave(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	gotPointerCapture(data) {
		act(() => Simulate.gotPointerCapture(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	lostPointerCapture(data) {
		act(() => Simulate.lostPointerCapture(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	rateChange(data) {
		act(() => Simulate.rateChange(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	reset(data) {
		act(() => Simulate.reset(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	resize(data) {
		act(() => Simulate.resize(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	scroll(data) {
		act(() => Simulate.scroll(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	toggle(data) {
		act(() => Simulate.toggle(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	seeked(data) {
		act(() => Simulate.seeked(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	seeking(data) {
		act(() => Simulate.seeking(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	select(data) {
		act(() => Simulate.select(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	beforeInput(data) {
		act(() => Simulate.beforeInput(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	stalled(data) {
		act(() => Simulate.stalled(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	submit(data) {
		act(() => Simulate.submit(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	suspend(data) {
		act(() => Simulate.suspend(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	timeUpdate(data) {
		act(() => Simulate.timeUpdate(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	touchCancel(data) {
		act(() => Simulate.touchCancel(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	touchEnd(data) {
		act(() => Simulate.touchEnd(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	touchMove(data) {
		act(() => Simulate.touchMove(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	touchStart(data) {
		act(() => Simulate.touchStart(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	transitionEnd(data) {
		act(() => Simulate.transitionEnd(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	volumeChange(data) {
		act(() => Simulate.volumeChange(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	waiting(data) {
		act(() => Simulate.waiting(this.__element, data));
	}

	/**
	 * @param {import("react-dom/test-utils").SyntheticEventData} [data]
	 */
	wheel(data) {
		act(() => Simulate.wheel(this.__element, data));
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
	 * @param {string} text
	 * @returns {ElementFacade?}
	 */
	findByText(text) {
		if (this.__element.textContent === text)
			return new ElementFacade(this.__element);
		for (const child of [...this.__element.children]) {
			const element = new ElementFacade(child).findByText(text);
			if (element)
				return element;
		}
		return null;
	}
}
