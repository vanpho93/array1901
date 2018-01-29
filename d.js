const arr = [1, 4, 3, 8];

// console.log(arr.map(x => true));
Array.prototype.myMap = function(fn) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(fn(this[i]));
    }
    return arr;
}

console.log(arr.myMap(x => x * x));
