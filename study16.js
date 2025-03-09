// funtion Ep.5
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// 2. arrow function การประกาศฟังก์ชันโดยใช้ => (fat arrow)
// คือฟังชั่นไม่มีชื่อแค่ใส่ fat arrow เข้ามาแทน
var aa = () => {
    console.log('Hello');
}

let bb = (data) => {
    console.log('Hi', data);
}

console.log('------------');
let bb111 = data => console.log('Hi', data);
// ถ้า paramiter แค่ตัวเดียวสามารเอาวงเล็บออกได้

const cc = () => {
    console.log('Hey');
}
console.log('------------');
const cc111 = () => console.log('Hey');
//ถ้ามีคำสั่งในปีกกามีคำสั่งเดียวสามารถเขียนในบันทัดเดียวกัย fat arrow ได้เลย

console.log('------------');
const ee = (n1, n2) => {
    return n1 * n2
}

console.log(ee(10, 20));

let dd = cc

aa()
bb('wow')
bb()
aa()
cc()
dd()



