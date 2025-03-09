// control statement (loop/iteration/repetition) Ep.2
// คือการทำงานเดิมๆ ซ้ำ
//------------------------------
// 1. while พิสูจน์ก่อน เป็นจริงทำ
let aa = 1
while (aa <= 5) {
    console.log('Hello')
    aa++;
}

// 2. do-while ทำก่อนแล้วพิสูจน์ เป็นจริงกลับไปทำ
let bb = 1
do {
    console.log('Hi')
    bb++
} while (bb <= 5)

// let bb = 10
// do {
//     console.log('Hi')
//     bb--
// } while (bb > 5)

// 3. for แบ่งเป็น 3 ส่วน ส่วยแรกทำครั้งเดียว ส่วนที่สองพิสูจน์ว่าจริงหรือเท็จ 
// จริงทำใน For แล้วส่วนที่ 3 วนเรื่อยๆจนกว่าจะเป็นเท็จ
for (let cc = 1; cc <= 5; cc++) {
    console.log('Hey');
}