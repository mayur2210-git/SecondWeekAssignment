function intersection(firstArray, secondArray) {
    let common = [];

    for (let i = 0; i < firstArray.length; i++) {
        let number = firstArray[i];

        if (secondArray.includes(number)) {
            if (!common.includes(number)) {
                common.push(number);
            }
        }
    }

    return common;
}

// Example 1: Some common elements
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

// Example 2: No common elements
console.log(intersection([1, 2, 3], [4, 5, 6])); // []

// Example 3: All elements are common
console.log(intersection([1, 2, 3], [1, 2, 3])); // [1, 2, 3]

// Example 4: Duplicate values
console.log(intersection([1, 2, 2, 3], [2, 2, 3, 4])); // [2, 3]