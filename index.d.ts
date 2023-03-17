export = Sandbox;
declare class Sandbox<T> {
    constructor(context: T);
    private __mocker;
    private __container;
    private __root;
    private __context;
    private __dom;
    private __contextProps;
    get textContent(): string;
    get innerHTML(): string;
    render(node: React.ReactNode): Promise<void> | void;
    renderAsync(node: React.ReactNode, promise: Promise<any>): Promise<void>;
    find(selector: string): ElementFacade | null;
    private __beforeEach;
    private __afterEach;
    private __before;
    private __after;
}
import React = require("react");
import ElementFacade = require("./ElementFacade");
