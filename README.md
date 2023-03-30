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
sandbox(globalThis, sb => {
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
				.equals(sb => sb.find("p")!.textContent, "Count: 1")              // Run an assertion
				.simulate(sb => sb.findByText("Click me"), "click")               // Fire one more event
				.assert(sb => sb.findByText("Click me")!.textContent, "Count: 2") // One more assertion
				.rerenders(3)                                                     // Assert for an expected amount of rerenders (including the first one)
				.run()                                                            // Run all previously defined actions. Always needs to run at the end
		});
	});
});
```

Then run:
```
npx ts-mocha test.tsx
```

## NPM scripts
- `test`. Run unit testing
