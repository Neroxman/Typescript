class ExempleFunctions {
    msg: string = 'Hello świecie';

    showMsg(): void {
        console.log(this.msg);
    }

    hello(): string {
        return 'Hello świecie, funkcja Hello';
    }

    hello1(message: string)
    {
        console.log(message);
    }

    hello2(message: string, message2: string)
    {
        console.log(message + ' ' + message2);
    }

    hello3(message: string, message2 = 'hello3')
    {
        console.log(message + ' ' + message2);
    }

    hello4 = message => console.log('Witaj świecie, funkcja hello4' + message);

    hello5 = () => console.log('Witaj świecie, funkcja hello5 ');

    hello6 = (message: string): string => {return 'Witaj świecie, funkcja hello6 ' + message};
}

var exemple = new ExempleFunctions();
exemple.showMsg();
exemple.hello1('Witaj swiecie, hello1');
exemple.hello2('Witaj świecie', 'elo');
exemple.hello3('Witaj świecie');
exemple.hello4(' Wywołana');
console.log (exemple.hello6('elo'));