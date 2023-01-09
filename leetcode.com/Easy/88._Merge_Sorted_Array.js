// 88. Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

const merge = (nums1, m, nums2, n) => {
    // // let arr1 = nums1.slice(0, m);
    // let arr2 = nums2.slice(0, n);
    // // let newArr = arr1.concat(arr2).sort();
    // nums1.slice(0, m).concat(nums2.slice(0, n)).sort();
    let end = m + n - 1;
    let end1 = m -1;
    let end2 = n -1;

    while( end2 >= 0 ) {
        if ( end1 >= 0 ) {
            nums1[end--] = nums1[end1] > nums2[end2] ? nums1[end1--] : nums2[end2--];
        } else {
            nums1[end--] = nums2[end2--];
        }
    }
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));