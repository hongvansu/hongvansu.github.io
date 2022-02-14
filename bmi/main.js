const data = [
  {
    title: "Chỉ số BMI dưới 18,5 là thiếu cân",
    content: "Bạn cần áp dụng chế độ ăn và thể thao để tăng cân.",
    image:
      "https://images.unsplash.com/photo-1541306912932-f6bed7f462eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    title: "Chỉ số BMI từ 18,5 đến 24,9 là bình thường",
    content: "Bạn có một cơ thể tốt.",
    image:
      "https://images.unsplash.com/photo-1579047440583-43a690fe2243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    title: "Chỉ số BMI ở giữa 25,0 và 29,9 được coi là thừa cân",
    content:
      "Tuy nhiên, tình trạng chưa quá trầm trọng nên bạn có thể tìm ngay các phương pháp giảm cân hiệu quả tự nhiên và kết hợp luyện tập. Nếu áp dụng điều độ và kiên trì, chỉ cần tốn khoảng vài tháng là bạn có ngay vóc dáng rất ưng ý rồi đó.",
    image:
      "https://images.unsplash.com/photo-1573879541250-58ae8b322b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    title: "Chỉ số BMI bằng hoặc trên 30 được xem là béo phì",
    content:
      "Với mức cân nặng này, cơ thể của bạn phải gặp rất nhiều áp lực hàng ngày, đặc biệt trọng lượng mỡ tạo áp lực lên cơ xương và các cơ quan làm ảnh hưởng đến sinh hoạt và sức khỏe của bạn.",
    image:
      "https://images.unsplash.com/photo-1573879026263-0ae3b9599d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80",
  },
];
// Truy cập vào các phần tử DOM
const btnSubmit = document.querySelector("#btn-submit")
const heightEl = document.getElementById ("height")
const weightEl = document.getElementById ("weight")
// Lắng nghe sự kiện khi bấm vào nút "Kiểm tra"
btnSubmit.addEventListener("click", function () {
  // B1: Lấy value trong 2 ô input
let weightValue = weightEl.value
let heightValue = heightEl.value

const nameInput = document.querySelector('input-box');
const form = document.querySelector('input-box');

nameInput.addEventListener('input-box', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
  if(nameInput.value === '') {
    nameInput.setCustomValidity('Enter your username!');
  } else {
    nameInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
  }
});

  // B2: Kiểm tra value trống hay không?
 


  // B3: Tính toán chỉ số BMI dựa vào công thức (tìm trên mạng)

  // B4: Dựa vào chỉ số BMI tính toán được ở B3 sử dụng "if/else" để hiển thị ra thông tin phù hợp
});
