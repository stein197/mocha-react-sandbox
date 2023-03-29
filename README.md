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
import "mocha";
import assert from "node:assert";
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
			return sb
				.render(<Component />)                                            // Render a component
				.simulate(sb => sb.find("button"), "click")                       // Simulate event
				.await(timeout(100))                                              // Wait for promise to resolve
				.assert(sb => sb.find("p")!.textContent, "Count: 1")              // Run assertion
				.simulate(sb => sb.findByText("Click me"), "click")               // Fire one more event
				.assert(sb => sb.findByText("Click me")!.textContent, "Count: 2") // One more assertion
				.run()                                                            // Run all previously defined actions
		});
	});
});
```

Then run:
```
npx ts-mocha test.tsx
```
