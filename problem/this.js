var This = /** @class */ (function () {
    function This() {
        this.msg = "Hello świecie";
    }
    This.prototype.printFunction = function () {
        return function () {
            console.log(this.msg);
        };
    };
    This.prototype.printFunction2 = function () {
        var _this = this;
        return function () {
            console.log(_this.msg);
        };
    };
    return This;
}());
var example = new This();
var fun = example.printFunction();
fun();
var fun2 = example.printFunction2();
fun2();
