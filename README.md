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
		it("Test case 1", async () => {
			// Render the component
			await sb.render(<Component />);
			// Make actions
			await sb.find("button")!.click();
			await sb.findByText("Click me")!.click();
			// Assert
			assert.equal(sb.find("p")!.textContent, "Count: 2");
		});
		it("Test case 2", () => {
			// Compose render and actions together
			await sb.react(<Component />, async () => {
				await sb.find("button")!.click();
				await sb.findByText("Click me")!.click();
				await timeout(100);
			});
			// Then only assert
			assert.equal(sb.find("p")!.textContent, "Count: 2");
		});
	});
});
```

Then run:
```
npx ts-mocha test.tsx
```
