export = Mocker;
declare class Mocker<T extends unknown, K extends keyof T> {
    /**
     * @param {T} context
     */
    constructor(context: T);
    /**
     * @type {Partial<T>}
     * @private
     */
    private __orig;
    /**
     * @type {T}
     * @private
     */
    private __context;
    /**
     * @param {K} key
     * @param {T[K]} implementation
     * @returns {void}
     */
    mock(key: K, implementation: T[K]): void;
    /**
     * @param {K} key
     * @returns {void}
     */
    unmock(key: K): void;
    clean(): void;
}
