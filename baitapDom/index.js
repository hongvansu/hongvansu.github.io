// 1. Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const heading = document.getElementById("heading")
heading.style.color = 'red'
heading.style.textTransform = 'uppercase'

// 2. Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const paras = document.querySelectorAll(".para")
// console.log(paras);

// for (let i = 0; i < paras.length; i++) {
//     paras[i].style.color = 'blue';
//     paras[i].style.fontSize = '20px';
// }

Array.from(paras).map(ele => {
    ele.style.color = "blue";
    ele.style.fontSize = '20px'
})

// 3. Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
// Tạo thẻ link
let link = document.createElement("a");
link.href = "https://www.facebook.com/"
link.innerText = "Facebook"
link.target = "_blank"

// Truy cập vào phần tử tham chiếu
let contentEl = document.querySelector(".content")

// Áp dụng cú pháp insertBefore
document.body.insertBefore(link, contentEl);

// 4. Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const titleEl = document.getElementById("title");
titleEl.innerText = "Đây là thẻ tiêu đề"

// 5. Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
const descriptionEl = document.querySelector(".description")
descriptionEl.classList.add("text-bold")

// 6. Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
const para3 = document.querySelector(".para-3");

let buttonEl = document.createElement("button")
buttonEl.innerText = "Click me"

document.body.replaceChild(buttonEl, para3);

// 7. Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const para2 = document.querySelector(".para-2");
let para2Copy = para2.cloneNode(true);

// document.body.insertBefore(para2Copy, buttonEl);
// para2.insertAdjacentElement("afterend", para2Copy)
buttonEl.insertAdjacentElement("beforebegin", para2Copy)

// 8. Xóa thẻ có class=“para-1”
const para1 = document.querySelector(".para-1");
// document.body.removeChild(para1) -> truy cập trực tiếp parent node
para1.parentNode.removeChild(para1); // Truy cập gián tiếp