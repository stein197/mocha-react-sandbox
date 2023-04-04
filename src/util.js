/**
 * @template {any[]} T
 * @template U
 * @param {(...args: T) => U} f
 * @returns {{
 * 	readonly info: [T, U][];
 * 	readonly calls: number;
 * 	readonly f(...args: T): U;
 * }}
 */
exports.track = function track(f) {
	const info = [];
	return {
		get info() {
			return info;
		},
		get calls() {
			return info.length;
		},
		f(...args) {
			const result = f(...args);
			info.push([args, result]);
			return result;
		}
	}
}