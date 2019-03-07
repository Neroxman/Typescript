class Interface {
    msg: string = "Hello";

    constructor(msg?: string) {

    }

    printMsg() {
        console.log(this.msg);
    }
}

let example = new Interface('Hello świecie');
example.printMsg();

interface Dog {
    name: string;
    age: number;
    color: string;
    date?: Date;
}

let dog: Dog =
    ({
        name: 'Reksio',
        age: 3,
        color: 'Szary'
    })

    console.log(dog);
    console.log(dog.name);