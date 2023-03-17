export = ElementFacade;
declare class ElementFacade {
    constructor(element: any);
    /**
     * @type {HTMLElement}
     * @private
     */
    private __element;
    /**
     * @returns {string}
     */
    get textContent(): string;
    /**
     * @returns {string}
     */
    get innerHTML(): string;
    /**
     * @param {string} selector
     * @returns {ElementFacade?}
     */
    find(selector: string): ElementFacade | null;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    abort(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    animationEnd(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    animationIteration(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    animationStart(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    blur(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    canPlay(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    canPlayThrough(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    change(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    click(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    compositionEnd(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    compositionStart(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    compositionUpdate(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    contextMenu(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    copy(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    cut(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    doubleClick(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    drag(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    dragEnd(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    dragEnter(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    dragExit(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    dragLeave(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    dragOver(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    dragStart(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    drop(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    durationChange(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    emptied(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    encrypted(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    ended(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    error(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    focus(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    input(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    invalid(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    keyDown(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    keyPress(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    keyUp(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    load(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    loadStart(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    loadedData(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    loadedMetadata(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    mouseDown(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    mouseEnter(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    mouseLeave(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    mouseMove(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    mouseOut(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    mouseOver(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    mouseUp(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    paste(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    pause(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    play(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    playing(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    progress(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    rateChange(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    scroll(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    seeked(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    seeking(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    select(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    stalled(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    submit(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    suspend(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    timeUpdate(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    touchCancel(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    touchEnd(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    touchMove(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    touchStart(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    transitionEnd(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    volumeChange(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    waiting(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     */
    wheel(data: ReactDOMTestUtils.SyntheticEventData | null): Promise<void>;
    /**
     * @param {keyof typeof ReactDOMTestUtils.Simulate} event
     * @param {ReactDOMTestUtils.SyntheticEventData?} data
     * @returns {Promise<void>}
     * @private
     */
    private __dispatchEvent;
}
import ReactDOMTestUtils = require("react-dom/test-utils");
