var Interface = /** @class */ (function () {
    function Interface(msg) {
        this.msg = "Hello";
    }
    Interface.prototype.printMsg = function () {
        console.log(this.msg);
    };
    return Interface;
}());
var example = new Interface('Hello świecie');
example.printMsg();
var dog = ({
    name: 'Reksio',
    age: 3,
    color: 'Szary'
});
console.log(dog);
console.log(dog.name);
