var ExempleFunctions = /** @class */ (function () {
    function ExempleFunctions() {
        this.msg = 'Hello świecie';
        this.hello4 = function (message) { return console.log('Witaj świecie, funkcja hello4' + message); };
        this.hello5 = function () { return console.log('Witaj świecie, funkcja hello5 '); };
        this.hello6 = function (message) { return 'Witaj świecie, funkcja hello6 ' + message; };
    }
    ExempleFunctions.prototype.showMsg = function () {
        console.log(this.msg);
    };
    ExempleFunctions.prototype.hello = function () {
        return 'Hello świecie, funkcja Hello';
    };
    ExempleFunctions.prototype.hello1 = function (message) {
        console.log(message);
    };
    ExempleFunctions.prototype.hello2 = function (message, message2) {
        console.log(message + ' ' + message2);
    };
    ExempleFunctions.prototype.hello3 = function (message, message2) {
        if (message2 === void 0) { message2 = 'hello3'; }
        console.log(message + ' ' + message2);
    };
    return ExempleFunctions;
}());
var exemple = new ExempleFunctions();
exemple.showMsg();
exemple.hello1('Witaj swiecie, hello1');
exemple.hello2('Witaj świecie', 'elo');
exemple.hello3('Witaj świecie');
exemple.hello4(' Wywołana');
console.log(exemple.hello6('elo'));
