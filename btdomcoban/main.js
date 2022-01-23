// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu
//Đặt màu văn bản thành #777
//Đặt kích thước phông chữ thành 2rem
//Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.

let heading = document.querySelector("#heading");
Object.assign(heading.style, {
  color: "#777",

  textTransform: "uppercase",
});
//Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)

let sp = document.querySelectorAll(".sp");
for (let i = 0; i < sp.length; i++) {
  Object.assign(sp[i].style, {
    color: "blue",
    fontSize: "20px",
  });
}
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)

let sp1 = document.querySelectorAll(".sp1");
for (let i = 0; i < sp1.length; i++) {
  Object.assign(sp1[i].style, {
    color: "red",
    fontSize: "20px",
  });
}
//Sửa background cho thẻ <li> 3 thành màu xanh (background-color)

let sp3 = document.querySelector(".sp3");

sp3.style.backgroundColor = "blue";
