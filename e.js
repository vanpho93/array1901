const arr = [1, 4, 3, 8];

// console.log(arr.filter(x => x % 2 === 0));

Array.prototype.myFilter = function(fn) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) arr.push(this[i]);
    }
    return arr;
}

console.log(arr.myFilter(x => x > 3));
