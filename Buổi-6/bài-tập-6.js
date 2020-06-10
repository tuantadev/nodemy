// bài 1:
//  cho  array = [1,5,7,8,9,15] sử dụng map hoặc filter
// bài 1.1: // * in ra các số chẵn trong mảng
array = [1,5,7,8,9,15] 
console.log(array);
var arrA =array.filter((item) => item % 2 == 0);
console.log(`Số chẵn của mảng ${arrA}`);
// bài 1.2: // * in ra các số lẻ  trong mảng
var arrB = array.filter((item) => item % 2 !== 0);
console.log(`Số lẻ của mảng ${arrB}`)
// bài 1.3: // * in ra các số lớn hơn hoặc bằng 5 trong mảng
var arrC = array.filter((item) => item >= 5);
console.log(`Số lớn hơn hoặc bằng 5 = ${arrC}`)
// bài 1.4:// *in ra các số chia hết cho 5 trong mảng
var arrD = array.filter((item) => item % 5 === 0);
console.log(`Số chia hết cho  5 = ${arrD}`)
// bài 1.5:// Tìm các số >5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị
var arrE = array.filter((item) => item > 5);
var arrF = arrE.map((item) => item + 1);
console.log(`các số > 5 được tăng 1 đơn vị ${arrF} `);
// bài 1.6: dùng slice để copy mảng từ phần tử số 3 đến phần tử cuối cùng
var arrG = array.slice(3);
console.log(arrG);
// bài 1.7: .splice để xóa 1 phần tử trong mảng
var arrF = array.splice(0,1,'15');
console.log(arrF);
console.log(array);
// bài 1.8: .push thêm 1 phần tử vào cuối mảng 
array.push(16);
console.log(array);
// * dùng vòng for tăng kết quả của các phần tử array lên 2 lần, kết quả sẽ là mảng sau [2,10,14,16,18,30]
var arrH = array.map((item2) => item2 * 2);
console.log(arrH);


// bài 2: cho arr [1,8,5,2,7,6,9,2,6]
// dùng .sort để sắp xếp mảng tăng dần và giảm dần
arr = [1,8,5,2,7,6,9,2,6];
console.log(`arr = ${arr}`);
var arrJ = arr.sort((item1,item2) => {
    if(item1 > item2) {
        return 1
    }
    if(item1 < item2) {
        return -1
    }
    if(item1 == item2) {
        return 0
    }
});
console.log(`sắp xếp mảng tăng dần ${arrJ}`);
var arrK = arr.sort((item1,item2) => {
    if(item1 > item2) {
        return -1
    }
    if(item1 < item2) {
        return 1
    }
    if(item1 == item2) {
        return 0
    }
});
console.log(`sắp xếp mảng giảm dần ${arrK}`);
// bài 3:
// cho array persons 
var persons = [
    {
	name: 'Trung',
	class: 'Nodemy01',
	dateJoin: '05-02-2020',
    age: 20
    },
    {
	name: 'Phong',
    class: 'Nodemy01',
    dateJoin: '06-01-2020',
    age: 19
    }, 
    {
	name: 'Nam',
    class: 'Nodemy02',
    dateJoin: '25-01-2020',
    age: 20
}];
// 3.1 dùng .sort  để sắp xếp mảng object có tuổi tăng dần
var arrL = persons.sort((item1,item2)=>{
    if(item1.age > item2.age) {
        return 1
    }
    if(item1.age < item2.age) {
        return -1
    }
    if(item1.age == item2.age) {
        return 0
    }
})
console.log(arrL);
// 3.3 dùng .sort để sắp xếp mảng theo ngày tham gia của học viên
var arrM = persons.sort((item1,item2)=>{
    if(item1.dateJoin.substring(3,5)  > item2.dateJoin.substring(3,5)) {
        return 1
    }
    if(item1.dateJoin.substring(3,5)  < item2.dateJoin.substring(3,5)) {
        return -1
    }
    if(item1.dateJoin.substring(3,5) == item2.dateJoin.substring(3,5)){
        return 0
    }
})
console.log(arrM);
// 3.2 dùng .filter để tìm ra những học viện tham gia trước tháng 2
var arrN = persons.filter((item) => item.dateJoin.substring(3,5) < 02 && item.dateJoin.substring(6,10) == '2020');
 console.log(arrN);
// 3.4 dùng .map để tạo mảng mới, viết hoa toàn bộ Tên học viện : (Trung => TRUNG) 
var arrV = persons.map((item) => item.name.toUpperCase());
console.log(arrV);
// 	gợi ý : dùng toUppercase để viết hoa

// bài 4: 
var doan = {
   name: 'Doan',
    age: 22,
    salary: 1000
}

// Đoàn là 1 master javascript lương 1000 USD, Trung idol Đoàn, 
// quyết định clone mọi thứ từ Đoàn
// Hãy giúp Trung clone mọi thuộc tính từ object doan.
// Để phân biệt thì Trung sẽ thêm 1 property: clone = true
// (Lưu ý: thay đổi object k làm ảnh hưởng tới object doan)
// {
//   name: 'Trung',
//   age: 22,
//   salary: 1000,
//   clone: true 
// }
var trung = {
    ...doan,
    clone :true
};
trung.name = 'Trung';
console.log(trung);

// Chủ đề string method
// bài 5:
// Cho string 
 var greeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy';
 console.log(greeting);
// 5.0: đếm xem có tất cả bao ký tự
console.log(`Có ${greeting.length} kí tự `);
// 5.1: .indexOf tìm xem nodemy nằm ở vị trí nào
console.log(`nodemy nằm ở vị trí ${greeting.indexOf('nodemy')}`);
// 5.2: .indexOf tìm xem Nodemy nằm ở vị trí nào
console.log(`Nodemy nằm ở vị trí ${greeting.indexOf('Nodemy')}`);
// 5.3: dùng .startWith kiểm tra xem có bắt đầu với Welcome không
console.log(greeting.startsWith(`Welcome`) ? console.log('Có') : console.log('Không'));
// 5.4: dùng .substring để lấy chữ Academy
console.log(greeting.substring(greeting.length - 7,greeting.length));
// 5.5: dùng .split để tách các từ
console.log(greeting.split(' '));
// 5.6: dùng .trim() để xóa các dấu cách ngoài rìa
console.log(greeting.trim());
// 5.7: dùng .include để kiểm tra xem Nodemy có trong câu trên không
console.log(greeting.includes('Nodemy'));
// 5.8  dùng .replace để thay thế Nodemy thành NODEMY
console.log(greeting.replace(/Nodemy/g, 'NODEMY'));
// 5.9: dùng .toUppercase để in hoa chữ cái
console.log(greeting.toUpperCase());
// 5.10 dùng .charAt để lấy 1 ký tự ở vị trí số 4
console.log(greeting.charAt(4));
// Chủ đề date
// Bài 6:
 var phucBirthday = '26-11-1992';
var cuongBirthday= '27-11-1994';
// 6.1 Đổi định dạng ngày thành ‘1992-11-26’
var phucBirthday = new Date('1992-11-26');
var cuongBirthday = new Date(1994,10,28);
console.log(phucBirthday);
console.log(cuongBirthday);
// 6.2 Quy đổi về cả 2 về object date
var datePhuc = phucBirthday.getDate();
var dateCuong = cuongBirthday.getDate();
console.log(datePhuc);
console.log(dateCuong);
// 6.3 So sánh xem phuc hay cuong lớn tuổi hơn
phucBirthday > cuongBirthday ? console.log(`Phúc lớn tuổi hơn Cường`) :console.log(`Cường lớn tuổi hơn Phúc`);
// 6.4 Hỏi sau 100 ngày từ lúc phucBirthday là ngày hôm nào, thứ mấy?
// 	gợi ý: dùng setDate(getDate + 100)
// 	dùng hàm getDay để tìm ra thứ  biết rằng:
// 	0: chủ nhật
// 	1: thứ 2  ..
var phucBirthday = phucBirthday.setDate(phucBirthday.getDate()+ 100);
//var getDay = phucBirthday.getDay();
//console.log(phucBirthday);
//console.log(getDay);
console.log(Date.now());

// Chủ đề về Math
// Bài 7: 
// 7.1 tạo ra số random từ 1 - 10, 1-100, 50 - 100
var randomeNumber1to10 = Math.random()*10;
var randomeNumber1to100 = Math.random()*100;
var randomeNumber50to100 = Math.random()*50 + 50;
console.log(randomeNumber1to10);
console.log(randomeNumber1to100);
console.log(randomeNumber50to100);
// 7.2 làm tròn số 7.434345 (.round) , làm tròn lên ( .ceil) , làm tròn xuống ( .floor)
var number = 7.434345;
var newNumber = Math.floor(number);
var ceilNumber = Math.ceil(number);
var floorNumber = Math.floor(number);
console.log(newNumber);
console.log(ceilNumber);
console.log(floorNumber);
// 7.3 lấy sau số thập phân 2 đơn vị :  ví dụ 7.434345 = 7.43
var sNumber = number.toFixed(2);
console.log(sNumber);
// 7.4 cho string ‘8’ và  ‘5’. Dùng parseInt để tính tổng ( kết quả = 13)
var strNumber = '8';
var strNumber1 = '5';
var kq = parseInt(strNumber) + parseInt(strNumber1);
console.log(kq);
// 7.5 tính 2^10
var muNumber = Math.pow(2,10);
console.log(muNumber);
