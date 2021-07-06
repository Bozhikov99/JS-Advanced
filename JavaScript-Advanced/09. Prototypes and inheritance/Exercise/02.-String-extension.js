(function () {

    String.prototype.ensureStart = function (str) {

        if (!this.toString().startsWith(str)) {
            return str + this.toString();
        }

        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {

        if (!this.toString().endsWith(str)) {
            return this.toString() + str;
        }

        return this.toString();
    }

    String.prototype.isEmpty = function () {

        return this.toString() === '';
    }

    String.prototype.truncate = function (n) {

        if (this.length <= n) {
            return this.toString();
        }

        if (n < 4) {
            return '.'.repeat(n);
        }

        if (!this.includes(' ')) {
            return this.slice(0, n - 3) + '...';
        }

        let words = this.split(' ');

        while (words.join(' ').length + 3 > n) {

            words.pop();
        }

        return words.join(' ') + '...';
    }

    String.format = function (str, ...params) {

        let retString=str;

        for (let i = 0; i < params.length; i++) {
            
            retString = retString.replace(`{${i}}`, params[i]);
        }

        return retString;
    };

})()

let str = 'my string';
console.log(str = str.ensureStart('my'))
console.log(str = str.ensureStart('hello '))
console.log(str = str.truncate(16))
console.log(str = str.truncate(14))
console.log(str = str.truncate(8))
console.log(str = str.truncate(4))
console.log(str = str.truncate(2))
str = String.format('The {0} {1} fox',
    'quick', 'brown');

console.log(str);

