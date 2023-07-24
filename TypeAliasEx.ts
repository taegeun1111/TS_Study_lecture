type User = { name: string; age: number };
const u1: User = {name: 'Max', age: 30};

//--------------------------------------------

function greet(user: { name: string; age: number }) {
    console.log('Hi, I am ' + user.name)
}

function isOlder(
    user: { name: string; age: number },
    checkAge :number) {
    return checkAge > user.age
}

//단순화 후
type afUser = {name :string; age:number};

function afGreet(user:afUser) {
    console.log('Hi, I am ' + user.name)
}

function afIsOlder(
    user:afUser,
    checkAge:number
){
    return checkAge > user.age
}
