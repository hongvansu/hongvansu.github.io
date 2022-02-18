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

// Truy cập vào nút tính toán kết quả
const btn_submit = document.getElementById("btn-submit");
// Truy cập vào ô input nhập chiều cao
const input_height = document.getElementById("height");
// Truy cập vào ô input nhập cân nặng
const input_weight = document.getElementById("weight");

// Truy cập vào tất cả element có class input
const inputs = document.querySelectorAll(".input");

let height, weight;
let isValid;
let bmi;

// Định nghĩa function checkInputs để validate dữ liệu đầu vào

btn_submit.addEventListener("click", function () {
  Array.from(inputs).map((e) => e.classList.remove("error"));
  Array.from(inputs).map((e) => e.classList.remove("success"));
  isValid = checkInputs();
  console.log(isValid);

  if (isValid) {
    height = input_height.value / 100;
    weight = input_weight.value;
    bmi = calculateBMI(height, weight).toFixed(2);
    console.log(bmi);

    document.querySelector(".say-hello").classList.add("hide");
    document.querySelector(".result-container").classList.remove("hide");
    document.querySelector(
      ".result-num"
    ).innerText = `Chỉ số BMI của bạn : ${bmi}`;

    render(bmi);
  }
});
// Định nghĩa function render()

function render(bmi) {
  if (bmi < 18.5) {
    renderUI(data[0]);
  } else if (bmi >= 18.5 && bmi < 24.9) {
    renderUI(data[1]);
  } else if (bmi >= 24.9 && bmi < 29.9) {
    renderUI(data[2]);
  } else {
    renderUI(data[3]);
  }
}
function renderUI(data) {
  document.querySelector(
    ".image-box"
  ).style.backgroundImage = `url(${data.image})`;
  document.querySelector(".result__title").innerText = `👉 ${data.title}`;
  document.querySelector(".result__content").innerText = `👉 ${data.content}`;
}
//  định nghĩa function calculateBMI với 2 tham số đầu vào là height và weight để tính toán ra chỉ số BMI

function calculateBMI(height, weight) {
  return weight / height ** 2;
}

//  truy cập vào 2 ô input nhập chiều cao, và cân nặng để lấy dữ liệu

function checkInputs() {
  height = input_height.value.trim();
  weight = input_weight.value.trim();

  isValid = true;

  if (weight == "") {
    isValid = false;
    setErrorFor(input_weight, "Cân nặng không được để trống.");
  } else if (!isNumber(weight)) {
    isValid = false;
    setErrorFor(input_weight, "Không đúng định dạng.");
  } else {
    setSuccessFor(input_weight);
  }

  if (height == "") {
    isValid = false;
    setErrorFor(input_height, "Chiều cao không được để trống.");
  } else if (!isNumber(height)) {
    isValid = false;
    setErrorFor(input_height, "Không đúng định dạng.");
  } else {
    setSuccessFor(input_height);
  }

  return isValid;
}

function setErrorFor(input, message) {
  const parent = input.parentElement;
  parent.classList.add("error");
  const small = parent.querySelector("small");
  small.innerText = message;
}

function setSuccessFor(input) {
  const parent = input.parentElement;
  parent.classList.add("success");
}

function isNumber(num) {
  return /^\d+$/.test(num);
}
