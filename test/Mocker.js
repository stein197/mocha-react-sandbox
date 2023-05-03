const assert = require("node:assert");
const Mocker = require("../src/Mocker");

// TODO
describe("Mocker", () => {
	let dummy = createDummy();
	beforeEach(() => dummy = createDummy());

	describe("Mocker.mock()", () => {
		it("Should mock a property when it exists and the mocker is allowed to override existing properties", () => {
			const mocker = new Mocker(dummy, false);
			mocker.mock("prop1", 20);
			assert.equal(dummy.prop1, 20);
		});
		it("Should mock a property when it does not exist", () => {
			const mocker = new Mocker(dummy);
			mocker.mock("prop2", 20);
			assert.equal(dummy.prop2, 20);
		});
		it("Shouldn't mock a property when it exists and the mocker is disallowed to overrode existing properties", () => {
			const mocker = new Mocker(dummy, true);
			mocker.mock("prop1", 20);
			assert.equal(dummy.prop1, 10);
		});
	});
	// TODO
	describe("Mocker.unmock()", () => {});
	// TODO
	describe("Mocker.getOriginal()", () => {});
	// TODO
	describe("Mocker.clean()", () => {});
});

function createDummy() {
	return {
		prop1: 10,
		func1: (a, b) => a + b
	};
}
