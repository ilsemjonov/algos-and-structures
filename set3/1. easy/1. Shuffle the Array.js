// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

/*
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let res = [];
    for (i = 0; i < n; i++) {
        res.push(nums[i], nums[i + n]);
    }
    return res;
};


// (nums, n) => nums.map((x, i) => i % 2 === 0 ? nums[i / 2] : nums[n + (i - 1) / 2])


// var shuffle = function(nums, n) {
//     let i = 0;
//     let result = [];
//     while (i < n) {
//         result = [...result, nums[i], nums[n+i]];
//         i++;
//     }
//     return result;
// };