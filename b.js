// const nums = new Array();
const nums = [1, 10, 4, 3];

Array.prototype.myPop = function() {
    this.splice(this.length - 1, 1);
}

nums.myPop();

// nums.pop();
// nums.shift();
// nums[1] = 9;
// nums.push(0);
// nums.unshift(7);
// nums.splice(2, 1);
// nums.splice(2, 0, 6);

console.log(nums);
