// Giá trị mặc định của counter ban đầu = 0

// Bấm vào Cộng tăng counter lên 1

// Bấm vào Trừ giảm counter đi 1

// Nếu counter > 0 có màu green
// Nếu counter = 0 có màu #333333
// Nếu counter < 0 có màu red

// truy cap

const counter = document.querySelector("#counter");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let count = 0;

// Lang nghe su kien khi bam vao nut cong
nextBtn.addEventListener("click", function () {
  count++;
  changeColor();
});

// Lang nghe su kien khi bam vao nut tru

prevBtn.addEventListener("click", function () {
  count--;
  changeColor();
});

// function de thay doi color
function changeColor() {
  counter.innerText = count;

  if (count > 0) {
    counter.style.color = "green";
  } else if (count == 0) {
    counter.style.color = "#333333";
  } else {
    counter.style.color = "red";
  }
}
