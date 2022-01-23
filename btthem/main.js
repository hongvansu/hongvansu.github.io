// BÀI THỰC HÀNH
// 1. Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ
// thành ‘red’, và in hoa nội dung của thẻ đó.
let heading = document.querySelector("#heading");
Object.assign(heading.style, {
  color: "red",
  textTransform: "uppercase",
});
//2. Thay đổi màu chữ của tất cả thẻ có class “para” thành
// màu “blue” và có font-size = “20px
let para = document.querySelectorAll(".para");
for (let i = 0; i < para.length; i++) {
  Object.assign(para[i].style, {
    color: "blue",
    fontSize: "20px",
  });
}
//3. Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ
// có class “para-3”.
let facebook = document.createElement("a");
facebook.setAttribute("href", "https://www.facebook.com/");
facebook.innerText = "facebook";
let para3 = document.querySelector(".para-3");
para3.after(facebook);
// 4. Thay đổi nội dung của thẻ có id=“title” thành
// “Đây là thẻ tiêu đề”
let title = document.querySelector("#title");
title.innerText = "Đây là thẻ tiêu đề";
//5. Thêm class “text-bold” vào thẻ có
// class=“description” (định nghĩa class “text-bold” có tác dụng
// in đậm chữ)
let description = document.querySelector(".description");
description.classList.add("text-bold");
document.querySelector(".text-bold").style.fontWeight = "bold";
// 6. Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
para3.innerHTML = "<button>Click me</button>";
// 7. Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
let copyPara2 = document.querySelector(".para-2").cloneNode(true);
document.querySelector(".para-2").after(copyPara2);
// 8. Xóa thẻ có class=“para-1"
document.querySelector(".para-1").remove();
// ------------------------------------------------------------
// BÀI TẬP THÊM
// Đếm xem có tất cả bao nhiêu từ trong 2 đoạn văn có độ dài lớn hơn 8
let p =
  document.querySelector(".p1").innerText +
  " " +
  document.querySelector("#p2").innerText;
let arrP = p.split(" ");
let count = 0;
for (let value of arrP) {
  if (value.length > 8) {
    count++;
  }
}
console.log(count);
// Style cho các từ có độ dài lớn hơn 8 trong p1
let p1 = document.querySelector(".p1").innerText;
let arrP1 = p1.split(" ");
for (let i = 0; i < arrP1.length; i++) {
  if (arrP1[i].length > 8) {
    arrP1[i] = "<span style='color:red'>" + arrP1[i] + "</span>";
  }
}
let newP1 = arrP1.join(" ");
document.querySelector(".p1").innerHTML = newP1;
//Thay thế các từ có độ nhỏ hơn 8 trong p2 thành text tuỳ ý.
let p2 = document.querySelector("#p2").innerText;
let arrP2 = p2.split(" ");
for (let i = 0; i < arrP2.length; i++) {
  if (arrP2[i].length < 8) {
    arrP2[i] = randomText();
  }
}
let newP2 = arrP2.join(" ");
document.querySelector("#p2").innerText = newP2;

function randomText() {
  let arr = ["hai", "một", "ba"];
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
// Thêm src, alt, href cho ảnh, link
let img = document.querySelector("img");
img.setAttribute(
  "src",
  "https://img-19.ccm2.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
);
img.setAttribute("alt", "ảnh lỗi");
let a = document.querySelectorAll("a");
a[1].innerText = "link";
a[1].setAttribute(
  "href",
  "https://helpx.adobe.com/ch_it/photoshop/how-to/photo-editor.html/"
);
// Thêm background cho các ô ngẫu nhiên trong bảng (mỗi hàng 1 ô, style bằng .style.backgroundColor)
let tr = document.querySelectorAll("tr");
for (let i = 0; i < tr.length; i++) {
  let td = tr[i].querySelectorAll("td");
  let ramdo = Math.floor(Math.random() * (td.length - 0 + 1)) + 0;
  td[ramdo].style.backgroundColor = "red";
}
