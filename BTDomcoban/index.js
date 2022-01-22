// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)

const paras = document.querySelectorAll("li");
// console.log(paras);

for (let i = 0; i < paras.length; i++) {
  paras[i].style.color = "blue";
  paras[i].style.fontSize = "20px";
}
//Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):

//Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách

//Remove thẻ <li> 4
let parent = document.getElementById("list");
let child = document.getElementById("Item 4");
parent.removeChild(child);
