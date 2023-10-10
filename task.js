// 459. Repeated Substring Pattern
var repeatedSubstringPattern = function (s) {
	const doubled = s + s;
	const sub = doubled.slice(1, -1);
	return sub.includes(s);
};
// console.log(repeatedSubstringPattern('abab'));
// console.log(repeatedSubstringPattern('abcabcabcabc'));
// console.log(repeatedSubstringPattern('aba'));
/////////////////////////////////


// 169. Majority Element
// Алгоритм большинства голосов Бойера — Мура
var majorityElement = function (nums) {
	let count = 0;
	let candidate = null;

	for (let num of nums) {
		if (count === 0) {
			candidate = num;
		}
		count += (num === candidate) ? 1 : -1;
	}

	return candidate;
};
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 2]));
// console.log(majorityElement([3, 2, 3]));
/////////////////////////////////////////////



// 172. Factorial Trailing Zeroes
var trailingZeroes = function (n) {


	let number = 0
	let factorial = BigInt(1)

	if (n < 2) {
		return 0
	}

	for (let i = 1; i <= n; i++) {
		factorial *= BigInt(i)
	}

	factorial = factorial.toString()

	for (let i = factorial.length - 1; i >= 0; i--) {

		if (factorial[i] == 0) {
			number++
		} else {
			break
		}
	}

	return number
};

console.log(trailingZeroes(30));
// console.log(trailingZeroes(10));
// console.log(trailingZeroes(7));
// console.log(trailingZeroes(4));
// console.log(trailingZeroes(3));
// console.log(trailingZeroes(0));




// async function f() {

// 	let promise = new Promise((resolve, reject) => {
// 		setTimeout(() => resolve("готово!"), 1000)
// 	});

// 	let result = await promise; // будет ждать, пока промис не выполнится (*)

// 	console.log(result); // "готово!"
// }

// f();
