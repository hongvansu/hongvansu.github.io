//Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

//Đặt màu văn bản thành #777
//Đặt kích thước phông chữ thành 2rem
//Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.

const para = document.querySelector("#text");
para.style.color = "#777";
para.style.fontSize = "2rem";
para.innerHTML =
  "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";

//Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
const uls = document.querySelectorAll("ul");
const li1 = uls[0].querySelectorAll("li");
for (let i = 0; i < li1.length; i++) {
  li1[i].style.color = "blue";
}
//Sử dụng javascript để thực hiện những công việc sau

//Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách

let list = document.getElementById ("list") 
for (let i = 8; i<=10; i++){
    let li = document.createElement("li");
    li.innerText = `Item ${i}`
    list.appendChild(li)
}


//const item8 = document.createElement("li");
      //const item9 = document.createElement("li");
      //const item10 = document.createElement("li");
     // item8.innerText = "Item 8";
      //item9.innerText = "Item 9";
     // item10.innerText = "Item 10";
     // uls[1].appendChild(item8);
      //uls[1].appendChild(item9);
     // uls[1].appendChild(item10);

//Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
uls[1].querySelector("li:first-child").style.color = "red";

//Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
uls[1].querySelector("li:nth-child(3)").style.backgroundColor = "red";
      // Remove thẻ <li> 4
      const item4 = uls[1].querySelector("li:nth-child(4)");
      uls[1].removeChild(item4);



//Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ

const newLi = document.createElement("li");
      newLi.innerText = "thay thế item 4";
      uls[1]
        .querySelector("li:nth-child(3)")
        .insertAdjacentElement("afterend", newLi);
    