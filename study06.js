// operator ตัวดำเนินการ Ep.2
// คือ เครื่องหมายที่ใช้ในการดำเนินการกับข้อมูล
//------------------------------
// Assignment Operators = += -= *= /= %=
let x = 10
x = x + 5  //  x += 5
let y = 20
y = y + 7 * x / 5 //   y += 7 * x / 5

// Nullish Coalescing Operator __??__
let aa = null
let bb = 111
console.log(aa ?? 888);
console.log(bb ?? 555);

// Ternary Conditional Operator __?__:__
let cc = 10 < 555 ? 'Correct' : 'Incorrect'
console.log(cc);

let dd = 'Sombat' > 'Somjai' ? 555 : 999 // b มาก่อน น้อยกว่า j, ตัวใหญ่มาก่อนตัวเล็ก
console.log(dd);

// Spread Operator __...__ (use with object and arrey)

let ee = [1, 2, 3]
let ff = [10, 20, 30]
let gg = [...ee, ...ff]
console.log(gg);
