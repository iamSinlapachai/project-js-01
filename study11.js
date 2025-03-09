// control statement (loop/iteration/repetition) Ep.3
// ทำงานเดิมๆ ซ้ำ
//------------------------------
// forEach for array
let aa = [10, 20, 30, 40, 50]
console.log(aa[0] * 10);
console.log(aa[1] * 10);
console.log(aa[2] * 10);
console.log(aa[3] * 10);
console.log(aa[4] * 10);
console.log('---------------');

aa.forEach((item) => {
    console.log(item * 10)
});
console.log('---------------');
let bb = ['สมชาย', 'สมหญิง', 'สมหมาย']
console.log(`สวัสดี ${bb[0]}`); //'สวัสดี, bb[0] หรือ 'สวัสดี' '+bb[0]'
console.log(`สวัสดี ${bb[1]}`);
console.log(`สวัสดี ${bb[2]}`);
console.log('---------------');
bb.forEach((item) => {
    console.log(`สวัสดี ${item}`) //'สวัสดี, item หรือ 'สวัสดี' '+item'
})
console.log('---------------');
// bb.forEach((item) =>{
//     คำสั่งการทำงาน
// })

// for..in use with Object or array (not recommand)
let cc = {
    fullname: 'สมชาย ใจดี',
    age: 20,
    score: [10, 20, 30],
    address: {
        no: '102',
        street: 'บางแค',
        provice: 'กรุงเทพ'
    }
}
console.log(cc.fullname);
console.log(cc.age);
console.log(cc.score[1]);
console.log(cc.address.street);
console.log(cc.address.provice);
console.log('---------------');
for (keyname in cc) {
    console.log(keyname);
    console.log(cc[keyname]);
}
// for..of ใชักับ array

let dd = ['สมชาย', 'สมหญิง', 'สมหมาย']
console.log(dd[0])
console.log(dd[1])
console.log(dd[2])
console.log('---------------')
for (item of dd) {
    console.log(`สวัสดี ${item}`);
}
// console.log('---------------')
// dd.forEach((item) => {

// })