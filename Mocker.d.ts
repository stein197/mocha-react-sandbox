export = Mocker;
declare class Mocker<T extends unknown, K extends keyof T> {
    constructor(context: T);
    private __orig;
    private __context;
    mock(key: K, implementation: T[K]): void;
    unmock(key: K): void;
    clean(): void;
}
