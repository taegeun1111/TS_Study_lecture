//객체의 구조를 정의할 수 있게 해준다.
interface Greetable {
    name: string;

    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string): void {
    }
}

let user1: Greetable;

user1 = new Person('Max');

user1.greet("하이");
console.log(user1);