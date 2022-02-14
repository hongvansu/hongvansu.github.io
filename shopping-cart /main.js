// 1. Phân tích chức năng : Bao gồm các chức năng gì?
// 1. Xóa sản phẩm
// 2. Thay đổi số lượng sản phẩm
// 3. Nhập mã giảm giá
// 4. Tính tổng tiền
// 5. Cập nhật số lượng sản phẩm đang có trong giỏ hàng
// 6. Hiển thị danh sách sản phẩm ban đầu

// 2. Phân tích đối tượng :
// Đối tượng ở đây là gì? -> sản phẩm

// Đối tượng bao gồm những thuộc tính gì?
// 1. Tên sản phẩm -> name
// 2. Giá tiền -> price : số
// 3. Mô tả -> description
// 4. Ảnh -> image
// 5. Số lượng sản phẩm đang có -> count : số
// 6. Id của sản phẩm -> id : để là 1,2,3

// Mockup danh sách sản phẩm
let products = [
  {
    id: 1,
    name: "Sản phẩm 1",
    description: "Mô tả 1",
    price: 1.2,
    image:
      "https://hyt.r.worldssl.net/hinh-hoa-tuoi/hoa-khuyen-mai/12291_ho-diep-mau.jpg",
    count: 2,
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    description: "Mô tả 2",
    price: 3.78,
    image:
      "https://hyt.r.worldssl.net/hinh-hoa-tuoi/lan-ho-diep/12320_ho-diep-mau.jpg",
    count: 3,
  },
];

// 6. Hiển thị danh sách sản phẩm
function renderProduct(arr) {
  // B1 : Xóa dữ liệu đang fix trong html
  // B2 : Kiểm tra có danh sách sản phẩm trong giỏ hàng hay không
  // Nếu không có thì hiển thị message : "Không có sản phẩm nào trong giỏ hàng"
  // B3 : Nếu có sản phẩm trong giỏ hàng
  // Sử dụng vòng lặp qua mảng "arr" để hiển thị
}

// 5. Cập nhật số lượng sản phẩm đang có trong giỏ hàng
function updateTotalProduct(arr) {
  // Duyệt qua mảng arr, cộng dồn các giá trị của thuộc tính "count" lại với nhau
  // Sau khi được kết quả thì cập nhập vào class "count"
}

// 1. Xóa sản phẩm
// Gán sự kiện cho nút xóa : Giống bài todolist
function deleteProduct(id) {}


// 2. Thay đổi số lượng sản phẩm
// Sử dụng sự kiện : "onchange" trong ô input

// id : id của sản phẩm muốn cập nhật
// e : biến event trong hàm sử lý sự kiện -> để lấy ra giá trị trong ô input khi thay đổi
function updateCountProduct(id, e) {}
