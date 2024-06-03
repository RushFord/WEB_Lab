function findUnique(arr) {
    let counts = {};
    for (let item of arr) {
        counts[item] = (counts[item] || 0) + 1;
    }
    for (let key in counts) {
        if (counts[key] > 1) {
            return false;
        }
    }
    return true;
}
console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));