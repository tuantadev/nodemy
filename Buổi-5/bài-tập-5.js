// Bài 1: cho array = [1,5,7,8,9,15,8]
var array = [1,5,7,8,9,15,8];
// * in ra các số chẵn của mảng
array.forEach(element => {
    if(element % 2 == 0){
        console.log(`Số chẵn của mảng là = ${element}`);
    }
});
// * in ra các số lẻ của mảng
array.forEach(element => {
    if(element % 2 != 0 ){
        console.log(`Số lẽ của mảng là = ${element}`)
    }
});
// * in ra các số lớn hơn hoặc bằng 5 của mảng
array.forEach( element => {
    if(element >= 5){
        console.log(`Số lớn hơn hoặc bằng 5 = ${element}`)
    }
})
// * Cộng tổng các số chia hết cho 5 của mảng
arrayAfter = [];
array.forEach(element =>{

})
// * Tìm ra tích 3 số đầu của mảng array
var count = 0;
var  tich = 1;
array.forEach(element =>{
    if(count < 3){
        tich *= element;
        count++;
    }
})
console.log(`tích 3 số đầu của mảng array = ${tich}`);

// * Tính tổng 3 phần tử cuối của mảng
var tong = 0;
var j = 1;
for (var i = 0 ; i < array.length  ; i++)
{ 
     if (i <  3 ){
        var  temp = array.length - j;
        tong += array[temp];
        j++;
     }
   
}
console.log(`tổng 3 phần tử cuối = ${tong}`);
// * Tìm xem trong array có phần tử nào là số 5 không?
var i = false;
array.forEach(element =>{
    element === 5 ? i = !i  : i;  
})
i == true ?  console.log(`Mảng array có phần tử 5`) :  console.log(`Mảng array ko có phần tử 5`);;
// * Đếm số phần tử = 8 trong mảng;
var count = 0;
array.forEach(element => {
    element === 8 ? count++ : count;
})
console.log(`Số phần tử 8 trong mảng = ${count} `)

// Chủ đề Object
// Bài 1: 
// var obj={
// 	firstName: ‘Đỗ’,
// 	lastName: “Hao”,
// }
// In ra màn hình : 
// Họ và tên học viên: Đỗ Hao
var obj = {
    firstName: 'Đỗ',
	lastName:'Hao',
}
console.log(`Họ và tên học viên : ${obj.firstName + ' ' + obj.lastName}`);
console.log(`Họ và tên học viên : ${obj['firstName'] + ' ' + obj['lastName']}`);
// Bài 2: Định nghĩa 1 đối tượng tên là car gồm các thuộc tính: 
//  hangXe là BMW, gia: 300000 USD, xuatXu ở Đức
var car = {
    hangxe: 'BMW',
    gia   : '300000 USD', 
    xuatXu:'Đức'
}
for(var i in car){
    console.log(`obj car source = ${car[i]}`);
}
// Bài 3: Bổ sung thêm các thuộc tính khác
//     a) Thêm 1 thuộc tính màu sắc của xe: ‘Đen’
car.color = 'Đen';
//     b) Thay đổi thuộc tính giá thành : 250000 USD
car.gia = '25000'
//     c) In ra thông tin xe như sau : BMW đen xuất xứ ở Đức có giá 250000 USD
console.log(`${car.hangxe +' ' +car.color +' ' + car.xuatXu +' ' + car.gia}`)
console.log(`${car['hangxe']+' '  + car['color'] +' ' + car['xuatXu']+' ' +car['gia']}`)
// Gợi ý: ( hangXe + mauSac + xuatXu + gia )






