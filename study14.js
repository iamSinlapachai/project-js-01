// funtion Ep.3
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function for default parameter การกำหนดค่าเริ่มต้นให้กับ parameter
function myFunct1(xx, yy = 200, zz = 100) { //default parameter ต้องเริ้มจากท้ายสุดเสมอ
    console.log(xx);
    console.log(yy);
    console.log(zz);
}
myFunct1(10, 20, 30)
console.log('------------');
myFunct1(11, 22)
console.log('------------');
myFunct1(11)

// function for return mulitple value
// return array value
function myFunc2() {
    let aa = [10, 20, 30]
    return aa
}

// return object value
function myFunc3() {
    let bb = {
        name: 'John',
        age: 30
    }
    return bb
}

// use destruction to get value from object and array
console.log('------------');
let [n1, n2, n3] = myFunc2()  // array
console.log(n1, n2, n3);

console.log('------------'); // object

let { name, age } = myFunc3()
console.log(name, age);