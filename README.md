# Test Sandbox
The package helps to befriend Mocha, React and TypeScript together.

## Installation
Right from the GitHub:
```
npm install --save-dev stein197/test-sandbox
```

## Usage
The package requires `mocha` and `react` to be installed (and `@types/*`, `ts-mocha` and `typescript` if it's a TypeScript project).
```tsx
// test.tsx
import React from "react";
import sandbox from "@stein197/test-sandbox";

// Passing global context that will be mocked
sandbox.go(globalThis, sb => {
	function Component() {
		const [count, setCount] = React.useState(0);
		return (
			<div>
				<p>Count: {count}</p>
				<button onClick={() => setCount(count + 1)}>Click me</button>
			</div>
		);
	}
	describe("Test case", () => {
		it("Test case 1", () => {
			return sb                                                             // Return a promise
				.render(<Component />)                                            // Render the component
				.simulate(sb => sb.find("button"), "click")                       // Simulate an event
				.await(timeout(100))                                              // Wait for the promise to resolve
				.do(() => 1 + 1)                                                  // Perform custom actions between others
				.timeout(100)                                                     // Wait for specified amount of milliseconds
				.equals(sb => sb.find("p")!.textContent, "Count: 1")              // Run an assertion
				.simulate(sb => sb.findByText("Click me"), "click")               // Fire one more event
				.rerenders(3)                                                     // Assert for an expected amount of rerenders (including the first one)
				.run()                                                            // Run all previously defined actions. Always needs to run at the end
		});
	});
});
it("Track a function", () => {
	const tracker = sandbox.track((a, b) => a + b);
	tracker.f(1, 2); // 3
	assert.equal(tracker.calls, 1);
	assert.equal(tracker.info, [
		[1, 2], 3
	]);
});
```

Then run:
```
npx ts-mocha test.tsx
```

## NPM scripts
- `test`. Run unit testing
