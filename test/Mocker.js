// @ts-check
const assert = require("node:assert");
const Mocker = require("../src/Mocker");

describe("Mocker", () => {
	let dummy = createDummy();
	beforeEach(() => dummy = createDummy());

	describe("Mocker.context", () => {
		it("Should return original context object", () => {
			const mocker = new Mocker(dummy);
			assert.equal(mocker.context, dummy);
		});
	});
	describe("Mocker.mock()", () => {
		it("Should mock a property when it exists and the mocker is allowed to override existing properties", () => {
			const mocker = new Mocker(dummy, true);
			mocker.mock("prop1", 20);
			assert.equal(dummy.prop1, 20);
		});
		it("Should mock a property when it does not exist", () => {
			const mocker = new Mocker(dummy);
			mocker.mock("prop2", 20);
			assert.equal(dummy.prop2, 20);
		});
		it("Shouldn't mock a property when it exists and the mocker is disallowed to overrode existing properties", () => {
			const mocker = new Mocker(dummy, false);
			mocker.mock("prop1", 20);
			assert.equal(dummy.prop1, 10);
		});
	});
	describe("Mocker.unmock()", () => {
		it("Should restore the original value when the mocker is allowed to override existing properties", () => {
			const mocker = new Mocker(dummy, true);
			mocker.mock("prop1", 20);
			mocker.unmock("prop1");
			assert.equal(dummy.prop1, 10);
		});
		it("Should remove properties completely when the mocker is not allowed to override existing properties and properties to override doesn't exist in a context", () => {
			const mocker = new Mocker(dummy, false);
			mocker.mock("prop2", 20);
			mocker.unmock("prop2");
			assert.equal("prop2" in dummy, false);
		});
	});
	describe("Mocker.getOriginal()", () => {
		it("Should return the original value when a property is mocked", () => {
			const mocker = new Mocker(dummy, true);
			const original = dummy.func1;
			mocker.mock("func1", (a, b) => a - b);
			assert.equal(mocker.getOriginal("func1"), original);
		});
		it("Should return the original value when a property is unmocked", () => {
			const mocker = new Mocker(dummy, true);
			const original = dummy.func1;
			assert.equal(mocker.getOriginal("func1"), original);
		});
	});
	describe("Mocker.clean()", () => {
		it("Should restore all values to original", () => {
			const mocker = new Mocker(dummy, true);
			const originalProp1 = dummy.prop1;
			const oritinalFunc1 = dummy.func1;
			mocker.mock("prop1", 20);
			mocker.mock("func1", (a, b) => a - b);
			mocker.clean();
			assert.equal(dummy.prop1, originalProp1);
			assert.equal(dummy.func1, oritinalFunc1);
		});
	});
});

function createDummy() {
	return {
		prop1: 10,
		func1: (a, b) => a + b
	};
}
