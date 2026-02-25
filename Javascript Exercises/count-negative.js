// constrains:
// 1. The input must be an array. - if not return false
// 2. The array must only contain numbers. - if not return false
// 3. The numbers must be finite (not NaN or Infinity). - if not return false
// 4. If Integers contains Infinity, -Inifinity, Nan - return false

function countNegatives(arr) {
    // implement your solution here
    if (!Array.isArray(arr)) {
        return false;
    }
    let count = 0;
    for (let ele of arr) {
        if (typeof ele !== "number" || !Number.isFinite(ele)) return false;
        if (ele < 0) {
            count++;
        }
    }

    return count;
};

console.log(countNegatives([1, -2, -3, 4, -5])); // 3
console.log(countNegatives([1, 2, 3, 4, 5])); // 0
console.log(countNegatives("not an array")); // false
console.log(countNegatives([1, 2, 3, NaN, 5])); // false