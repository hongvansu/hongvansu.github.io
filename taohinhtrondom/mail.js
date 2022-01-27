const box = document.querySelector(".box");

document.addEventListener("keydown", function(event) {
    // Lấy ra giá trị top left của hình tròn
    let top = box.offsetTop
    let left = box.offsetLeft

    // Ấn mũi tên lên
    if(event.keyCode == 38) {
        box.style.top = `${top - 20}px`
    }

    // Ấn mũi tên xuống
    if(event.keyCode == 40) {
        box.style.top = `${top + 20}px`
    }

    // Ấn mũi tên sang trái
    if(event.keyCode == 37) {
        box.style.left = `${left - 20}px`
    }

    // Ấn mũi tên sang phải
    if(event.keyCode == 39) {
        box.style.left = `${left + 20}px`
    }
})