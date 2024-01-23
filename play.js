let name = 'Harshil';
let age = 20;
let hashobby = true;

//normanl function
function fun(uname, uage, uhobby) {
    return uname + ' ' + uage + ' ' + uhobby;
}
// console.log(fun(name, age, hashobby));
// arrow function
const product = (a, b) => {
    return a * b;
}
// console.log("Product of two numbers is : " + product(2, 3));

const student ={
    name: 'Harshil',
    age: 20,
    hashobby: true,
    greet : () =>{
        console.log("Hi "  + name);
    }
}
console.log(student);
student.greet();