// funtion Ep.4
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function expression การประกาศฟังก์ชันโดยใช้ตัวแปร
// 1. anonymous function ฟังก์ชันที่ไม่มีชื่อ 
// การเอาฟังชั่นไปเก็บไว้ในตัวแปล
var aa = function () {
    console.log('Hello');
}

let bb = function (data) {
    console.log('Hi', data);
}
const cc = function () {
    console.log('Hey');
}
let dd = cc

aa()
bb('wow')
bb()
aa()
cc()
dd()

console.log('------------');
const ee = function (n1, n2) {
    return n1 * n2
}

console.log(ee(10, 20));


