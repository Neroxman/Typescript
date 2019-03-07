class This {
    msg: string = "Hello świecie";

    printFunction()
    {
        return function(){
            console.log(this.msg);
        }
    }

    printFunction2()
    {
        return () =>{
            console.log(this.msg);
        }
    }
}

var example = new This();
var fun = example.printFunction();
fun();

var fun2 = example.printFunction2();
fun2();