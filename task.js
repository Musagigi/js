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
		count += (candidate === num) ? 1 : -1;
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

// console.log(trailingZeroes(30));
// console.log(trailingZeroes(10));
// console.log(trailingZeroes(7));




// async function f() {

// 	let promise = new Promise((resolve, reject) => {
// 		setTimeout(() => resolve("готово!"), 1000)
// 	});

// 	let result = await promise; // будет ждать, пока промис не выполнится (*)

// 	console.log(result); // "готово!"
// }

// f();

// var a = {};
// (function b(a) {
// 	a.a = 10
// 	a = null
// })()

// console.log(a);

// function transpose(matrix) {

// 	let result = []

// 	for (let j = 0; j < matrix[0].length; j++) {

// 		result.push([])

// 		for (let i = 0; i < matrix.length; i++) {
// 			result[result.length - 1].push(matrix[i][j])
// 		}
// 	}
// 	return result
// }

// console.log(transpose([[1, 2, 3], [4, 5, 6]]))



var obj = {
	person: {
		name: 'joe',
		history: {
			hometown: 'bratislava',
			bio: {
				funFact: 'I like fishing.'
			}
		}
	}
};

Object.prototype.hash = function (string) {
	let strSplit = string.split('.')
	let t = this

	strSplit.forEach(element => t = this[element]);
	return t
}

// console.log(obj.hash('person.name')); // 'joe'
// obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
// obj.hash('person.history.homeStreet'); // undefined
// obj.hash('person.animal.pet.needNoseAntEater'); // undefined


var merge = function (nums1, m, nums2, n) {
	nums1.length = m
	nums2.length = n
	nums1 = [...nums1, ...nums2]
	nums1.sort((a, b) => a - b)
};

var nums1 = [1, 2, 3, 0, 0, 0]
var nums2 = [2, 5, 6]
var m = 3
var n = 3
// console.log(merge(nums1, m, nums2, n));
// console.log(nums1);

var merge = function (nums1, m, nums2, n) {
	nums1.length = m
	nums2.length = n
	nums1 = [...nums1, ...nums2]
	nums1.sort((a, b) => a - b)
};

var nums1 = [1, 2, 3, 0, 0, 0]
var nums2 = [2, 5, 6]
var m = 3
var n = 3
// console.log(merge(nums1, m, nums2, n));
// console.log(nums1);

// 1. Two Sum
var twoSum = function (nums, target) {
	obj = {}
	let count = 0

	for (let i = 0; i < nums.length; i++) {
		count = target - nums[i]

		if (count in obj) {
			return [obj[count], i]
		}
		obj[nums[i]] = i
	}
};
// console.log(twoSum([2, 7, 11, 15], 9));

// 53. Maximum Subarray
var maxSubArray = function (nums) {

	let test = []

	for (let i = 0; i < nums.length; i++) {
		let result = nums[i]

		for (let k = i + 1; k < nums.length; k++) {

			result += nums[k]
		}
		test.push(result)
	}

	if (nums.length) {
		maxSubArray(nums.length - 1)
	}

	return test
};
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 27. Remove Element
var removeElement = function (nums, val) {

	for (let i = 0; i < nums.length; i++) {

		if (val === nums[i]) {
			count++
			nums.splice(i, 1)
			i--
		}
	}
	return nums.length
};
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// 26. Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
	for (let i = 0; i < nums.length; i++) {

		if (nums[i] === nums[i + 1]) {
			nums.splice(i, 1)
			i--
		}
	}
	console.log(nums);
	return nums.length

	// nums = nums.filter((elem, index, arr) => elem !== arr[index + 1])
	// return nums
};
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// 80. Remove Duplicates from Sorted Array II
var removeDuplicates2 = function (nums) {
	let count = 0
	let j = 1

	for (let i = 1; i < nums.length; i++) {

		if (nums[i] === nums[i - 1]) {
			count++
		} else {
			count = 1
		}

		if (count <= 2) {
			nums[j] = nums[i]
			j++
		}
	}
	nums.length = j
	return nums.length
}
console.log(removeDuplicates2([0, 0, 0, 0, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4]));
// РЕШЕНИЕ №2
// var removeDuplicates2 = function (nums) {
// 	let obj = {}

// 	for (let i = 0; i < nums.length; i++) {

// 		if (nums[i] in obj) {
// 			obj[nums[i]]++
// 		} else {
// 			obj[nums[i]] = 1
// 		}
// 	}

// 	let objKeys = Object.keys(obj)

// 	objKeys.forEach(elem => {

// 		if (obj[elem] > 2) {

// 			let elemIndex = nums.indexOf(Number(elem))
// 			nums.splice(elemIndex, obj[elem] - 2)
// 		}
// 	})

// 	return nums.length
// }
// console.log(removeDuplicates2([0, 0, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4]));
// console.log(removeDuplicates2([1, 1, 1, 1]));
