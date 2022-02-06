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


//Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p

let facebook = document.createElement("p");
facebook.setAttribute("href", "https://www.facebook.com/");
facebook.innerText = "facebook";
let para3 = document.querySelector(".para-3");

// Thay thế các ký hiệu ? => 🤔, ! => 😲

// Truy cập vào thẻ p
let para = document.querySelector("p");

// Viết gộp
// para.innerText = para.innerText.replaceAll("?", "🤔");
// para.innerText = para.innerText.replaceAll("!", "😲");

// Viết tách ra
let content1 = para.innerText.replaceAll("?", "🤔");
para.innerText = content1;

let content2 = para.innerText.replaceAll("!", "😲");
para.innerText = content2;
