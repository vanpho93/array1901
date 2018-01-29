const arr = [1, 4, 3, 8, 9, 2, 1];

console.log(arr.indexOf(8));

Array.prototype.myIndexOf = function(value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) return i;
    }
    return -1;
}

console.log(arr.myIndexOf(2));
console.log(['a', 'x', 'y', 'ux', 'j'].myIndexOf('ux'));
console.log(['a', 'x', 'y', 'ux', 'j'].myIndexOf('c'));

const teo = { name: 'Teo' };
const ti = { name: 'Ti' };
const tun = { name: 'Tun' };

const people = [teo, ti, tun];

console.log(people.myIndexOf(ti));
