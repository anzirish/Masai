"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getSum = (nums) => {
    let totalSum = 0;
    nums.forEach((n) => {
        if (n % 2 === 0)
            totalSum += n;
    });
    return totalSum;
};
console.log(getSum([4, 3, 2, 6]));
//# sourceMappingURL=index.js.map