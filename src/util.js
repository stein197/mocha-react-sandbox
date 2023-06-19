/**
 * @template {any[]} T
 * @template U
 * @param {(...args: T) => U} f
 * @returns {{
 * 	readonly info: [args: T, result: U][];
 * 	readonly f(...args: T): U;
 * }}
 */
exports.track = function track(f) {
	const info = [];
	return {
		get info() {
			return info;
		},
		f(...args) {
			const result = f(...args);
			info.push([args, result]);
			return result;
		}
	}
}