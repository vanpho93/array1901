const people = [
    { name: 'Teo', age: 10, height: 150 },
    { name: 'Ti', age: 20, height: 120 },
    { name: 'Tun', age: 15, height: 130 },
];

Array.prototype.myFind = function(fn) {
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) return this[i];
    }
}

console.log(people.myFind(person => person.name === 'Ti'));
