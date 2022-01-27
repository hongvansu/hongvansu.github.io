// Truy cập
const counter = document.querySelector("#counter");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let count = 0;

// Lắng nghe sự kiện khi bấm vào nút cộng
nextBtn.addEventListener("click", function () {
    count++ // tăng count lên 1
    changeColor() // thay đổi màu tương ứng với count
})

// Lắng nghe sự kiện khi bấm vào nút trừ
prevBtn.addEventListener("click", function () {
    count-- // giảm count đi 1
    changeColor() // thay đổi màu tương ứng với count
})

// Function để thay đổi color
function changeColor() {
    counter.innerText = count;

    if (count > 0) {
        counter.style.color = "green"
    } else if (count == 0) {
        counter.style.color = "#333333"
    } else {
        counter.style.color = "red"
    }
}