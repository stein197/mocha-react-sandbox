/**
 * @template {(...args: any[]) => any} T
 * @param {T} f
 * @returns {{
 * 	readonly calls: number;
 * 	f: T;
 * }}
 */
exports.track = function track(f) {
	let calls = 0;
	return {
		get calls() {
			return calls;
		},
		f(...args) {
			calls++;
			return f(...args);
		}
	}
}
