const arr = [1, 4, 3, 8];

// console.log(arr.filter(x => x % 2 === 0));
const people = [
    { name: 'Teo', age: 10, height: 150 },
    { name: 'Ti', age: 20, height: 120 },
    { name: 'Tun', age: 15, height: 130 },
];

console.log(people.filter(person => person.age > 19 || person.height > 120));
// tuoi lon hon 12, chieu cao lon hon 120

Array.prototype.myFilter = function(fn) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) arr.push(this[i]);
    }
    return arr;
}

console.log(arr.myFilter(x => x > 3));
