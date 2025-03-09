// funtion Ep.1
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function มี 4 ประเภทใหญ่
// 1. no parameter, no return
function myfunctA() {
    console.log('Hello');
    console.log('Hi');
}

// 2. have parameters, no return
function myfunctB(data1, data2, data3) {
    console.log(data1);
    console.log(data2 + data3);
}

myfunctA()
myfunctA()
myfunctB('Hello', 10, 20) //ข้อมูลที่ส่งให้ parameter เรียก argument
myfunctB('Hi', 100, 200) //ข้อมูลมีกี่ตัวส่งเท่านั้นตัว
myfunctA()