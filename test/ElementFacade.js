// @ts-check
const assert = require("node:assert");
const {beforeEach, describe, it} = require("node:test");
const jsdom = require("jsdom");
const ElementFacade = require("../src/ElementFacade");

describe("ElementFacade", () => {
	const dom = new jsdom.JSDOM();
	let element = dom.window.document.createElement("div");

	beforeEach(() => {
		element = dom.window.document.createElement("div");
	});
	describe("get element", () => {
		it("Should return the passed element", () => {
			const facade = new ElementFacade(element);
			assert.equal(facade.element, element);
		});
	});
	describe("get textContent", () => {
		it("Should return an empty string when an element doesn't have inner text", () => {
			const facade = new ElementFacade(element);
			assert.equal(facade.textContent, "");
		});
		it("Should return textual content of an element", () => {
			element.textContent = "Hello, World!";
			const facade = new ElementFacade(element);
			assert.equal(facade.textContent, "Hello, World!");
		});
	});
	describe("get innerHTML", () => {
		it("Should return an empty string when an element doesn't have children", () => {
			const facade = new ElementFacade(element);
			assert.equal(element.innerHTML, "");
		});
		it("Should return correct innerHTML when an element has children", () => {
			const facade = new ElementFacade(element);
			element.innerHTML = "<p>Hello, World!</p>";
			assert.equal(element.innerHTML, "<p>Hello, World!</p>");
		});
	});
	describe("find()", () => {
		beforeEach(() => {
			element.innerHTML = "<p class=\"text\">abc<p><p class=\"text\">def</p>";
		});
		it("Should return null when there is no such an element", () => {
			const facade = new ElementFacade(element);
			assert.equal(facade.find("div"), null);
		});
		it("Should return the first matching element", () => {
			const facade = new ElementFacade(element);
			const found = facade.find("p.text");
			assert.equal(found.element, element.children[0]);
			assert.equal(found.textContent, "abc");
		});
	});
	describe("findByText()", () => {
		beforeEach(() => {
			element.innerHTML = "<p class=\"text\">abc<p><p class=\"text\">def</p>";
		});
		it("Should return null when there is no such an element", () => {
			const facade = new ElementFacade(element);
			assert.equal(facade.findByText("ghi"), null);
		});
		it("Should return the first matching element", () => {
			const facade = new ElementFacade(element);
			const found = facade.findByText("abc");
			assert.equal(found.element, element.children[0]);
			assert.equal(found.textContent, "abc");
		});
	});
});
