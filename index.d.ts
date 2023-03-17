export = Sandbox;
declare class Sandbox<T> {
    /**
     * @param {T} context
     */
    constructor(context: T);
    /**
     * @type {Mocker<T>}
     * @private
     */
    private __mocker;
    /**
     * @type {HTMLDivElement}
     * @private
     */
    private __container;
    /**
     * @type {ReactDOMClient.Root?}
     * @private
     */
    private __root;
    /**
     * @type {T}
     * @private
     */
    private __context;
    /**
     * @type {jsdom.JSDOM}
     * @private
     */
    private __dom;
    /**
     * @type {string[]}
     * @private
     */
    private __contextProps;
    /**
     * @returns {string}
     */
    get textContent(): string;
    /**
     * @returns {string}
     */
    get innerHTML(): string;
    /**
     * @param {React.ReactNode} node
     * @returns {Promise<void> | void}
     */
    render(node: React.ReactNode): Promise<void> | void;
    /**
     * @param {React.ReactNode} node
     * @param {Promise<any>} promise
     */
    renderAsync(node: React.ReactNode, promise: Promise<any>): Promise<void>;
    /**
     * @param {string} selector
     * @returns {ElementFacade?}
     */
    find(selector: string): ElementFacade | null;
    /**
     * @private
     */
    private __beforeEach;
    /**
     * @private
     */
    private __afterEach;
    /**
     * @private
     */
    private __before;
    /**
     * @private
     */
    private __after;
}
import React = require("react");
import ElementFacade = require("./ElementFacade");
