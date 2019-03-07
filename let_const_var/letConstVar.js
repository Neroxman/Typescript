var LetConstVar = /** @class */ (function () {
    function LetConstVar() {
    }
    LetConstVar.prototype.printNumber = function () {
        var i = 99;
        for (var i_1 = 0; i_1 < 3; i_1++) {
            console.log(i_1);
        }
        console.log(i);
    };
    return LetConstVar;
}());
var example = new LetConstVar();
example.printNumber();
