// variable ตัวแปร
// เป็นชื่อที่ตั้งเอง ใช้เก็บข้อมูล
// การใช้งานตัวแปร คือ เอาค่าไปเก็บในตัวแปร หรือ เอาค่าในตัวแปรมาใช้
//------------------------------
// var (can change, dont have to set, Global variable )
var aa = 10

// let (can change, dont have to set , Local variable)
let bb = 20


// const (cannot change, have to set, Local variable )
const cc = 30

aa = 111
bb = 222
// cc = 333 error!

{
    var wow = 10
    {
        console.log(wow);
        let wee = 20
        const woo = 30
        console.log(wee);
        console.log(woo);
    }
    {
        console.log(wow);
        // console.log(wee); error!
        // console.log(woo); error!
    }
    // console(wow) error!
}