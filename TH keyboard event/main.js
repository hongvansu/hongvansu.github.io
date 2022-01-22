//1. Nhấn phím enter thì xuất hiện 1 hình tròn ở vị trí bất kỳ trong trang web
//2. Nhấn các phím space thì xuất hiện 1 hình vuông ở vị trí bất kỳ trong trang web
//3. Nhấn các phím còn lại thì đổi màu background của trang web thành 1 màu bất kỳ
//3. Mỗi lần nhấn phím chỉ có 1 hình được xuất hiện (hình tròn hoặc hình vuông tùy thuộc vào phím được bấm)

// Lắng nghe sự kiện keydown
//document.addEventListener("keydown", function () {
    //console.log("keydown");
//});

// Lắng nghe sự kiện keyup
//document.addEventListener("keyup", function () {
   // console.log("keyup");
//});

// Lắng nghe sự kiện keypress
//document.addEventListener("keypress", function () {
    //console.log("keypress");
//});
//document.addEventListener('click', function (event) {
    //console.log(event);
//})
//document.addEventListener('click', function(event) {
    // B1 : Tạo hình tròn : Tạo thẻ div và gán class box
  //  let box = document.createElement("div")
    //box.classList.add("box");


    // B2 : Lấy ra vị trí đang nhấn chuột
    //let x = event.offsetX;
    //let y = event.offsetY;


    // B3 : Gán lại tọa độ cho thằng box
    //box.style.top = `${y - 50}px`;
    //box.style.left = `${x - 50}px`;

    //document.body.appendChild(box)
//})
//document.addEventListener('mousemove', function(event) {
    // Trước khi thêm box mới thì xóa box cũ đi
    // Truy cập vào box
    //const boxEl = document.querySelector(".box");

    // Nếu box tồn tại thì mới xóa
    //if(boxEl) {
       // boxEl.parentNode.removeChild(boxEl);
    //}

    // B1 : Tạo hình tròn : Tạo thẻ div và gán class box
    //let box = document.createElement("div")
    //box.classList.add("box");


    // B2 : Lấy ra vị trí đang nhấn chuột
    //let x = event.offsetX;
    //let y = event.offsetY;


    // B3 : Gán lại tọa độ cho thằng box
    //box.style.top = `${y - 50}px`;
   // box.style.left = `${x - 50}px`;

    //document.body.appendChild(box)
//})

// Thực hiện vẽ hình tròn
function drawCircle() {
    // Trước khi thêm box mới thì xóa box cũ đi
    // Truy cập vào box
    const boxEl = document.querySelector(".box");

    // Nếu box tồn tại thì mới xóa
    if(boxEl) {
        boxEl.parentNode.removeChild(boxEl);
    }

    // B1 : Tạo hình tròn : Tạo thẻ div và gán class box
    let box = document.createElement("div")
    box.classList.add("box");


    // B2 : Random vị trí
    let x = randomPosition(100, 1000) // random theo chiều ngang
    let y = randomPosition(100, 500) // random theo chiều dọc


    // B3 : Gán lại tọa độ cho thằng box
    box.style.top = `${y}px`;
    box.style.left = `${x}px`;

    document.body.appendChild(box)
}