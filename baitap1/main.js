//Nối tiếp vào bài tập buổi 1 - Bài số 3: ul-li

// Cau 1 :

//Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).

//Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul

//Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)

// Tao nut add
let btAdd = document.createElement("button");
btAdd.innerText = "Add";
document.body.prepend(btAdd);

// Tao input

let input = document.createElement("input");
btAdd.insertAdjacentElement("beforebegin", input);
btAdd.addEventListener("click", function () {
  // B1 : lay noi dung trong o input
  let value = input.value;
  // B2 : kiem tra noi dung co trong hay khong
  if (value == "") {
    alert("Noi dung khong duoc de trong");
    return;
  }
  // Tao the li moi
  let li = document.createElement("li");
  li.innerText = value;
  list.appendChild(li);

  // Clear o input de tao noi dung moi
  input.value = "";
});

// Cau 2 :

//Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul

// Tao nut Add :

let btnRemove = document.createElement("button");
btnRemove.innerText = "Remove";
document.body.prepend(btnRemove);

btnRemove.addEventListener("click", function () {
  // Truy cap vao the cuoi cung

  let liLast = document.querySelector(".list li: last-child");

  // Kiem tra , neu con li thi thuc hien xoa

  if (liLast) {
    liLast.parentNode.removeChild(liLast);
  }
});

// Bai 3 :
//Thêm 1 nút Hide trên đầu của danh sách ul

// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show

// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide

// Tao nut Hide

let btnHide = document.createElement("button");
btnHide.innerText = "Hide";
document.body.prepend(btnHide);

btnHide.addEventListener("click", function () {
  list.classList.toggle("hide");
  // Kiem tra xem phan tu co class hide hay khong
  // Neu co -> "show"
  // Neu khong -> "Hide"
  if (list.classList.contains("hide")) {
    btnHide.innerText = "show";
  } else {
    btnHide.innerText = "Hide";
  }
});
