

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
  "https://media.istockphoto.com/photos/online-conference-of-diverse-employees-on-the-screen-picture-id1313246059?b=1&k=20&m=1313246059&s=170667a&w=0&h=eT1_ETl-bStWQV0ZSdTKwUuETUzRVzxHB9G9YWth0Zs="
);
img.setAttribute("alt", "ảnh lỗi");
let a = document.querySelectorAll("a");
a[1].innerText = "link";
a[1].setAttribute("href", "https://unsplash.com/s/photos/photo");

// Thêm background cho các ô ngẫu nhiên trong bảng (mỗi hàng 1 ô, style bằng .style.backgroundColor)

let tr = document.querySelectorAll("tr");
for (let i = 0; i < tr.length; i++) {
  let td = tr[i].querySelectorAll("td");
  let ramdo = Math.floor(Math.random() * (td.length - 0 + 1)) + 0;
  td[ramdo].style.backgroundColor = "red";
};
