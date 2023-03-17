# Mocha React Sandbox
The package helps to befriend Mocha, React and TypeScript together.

## Installation
Right from the GitHub:
```
npm install --save-dev stein197/mocha-react-sandbox
```

## Usage
```tsx
// test.tsx
import "mocha";
import * as assert from "node:assert";
import * as React from "react";
import * as Sandbox from "@stein197/mocha-react-sandbox";

describe("Test case", () => {
	const s = new Sandbox(globalThis);
	function Component() {
		const [count, setCount] = React.useState(0);
		return (
			<div>
				<p>Count: {count}</p>
				<button onClick={() => setCount(count + 1)}>Click me</button>
			</div>
		);
	}
	it("Test case 1", async () => {
		await s.render(<Component />);
		await s.find("button").click();
		assert.equal(s.find("p").textContent, "Count: 1");
	});
});

```

Then run:
```
npx ts-mocha test.tsx
```

## NPX scripts
- `clean`. Clean the directory from `d.ts` files
- `dts`. Generate `d.ts` typings
