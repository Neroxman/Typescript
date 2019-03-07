class LetConstVar {

    printNumber() {
        let i = 99;

        for (let i = 0; i < 3; i++) {
            console.log(i)
        }
        console.log(i);
    }
}

var example = new LetConstVar();
example.printNumber();