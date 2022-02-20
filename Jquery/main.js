// Truy cập

// Thay đổi nội dung
// html(), text()
$("#heading").text("Hello world")

$("#heading").html("<span>Chúc mừng năm mới</span>")

// Thay đổi css

// Cách 1 : Viết tách ra
$("#heading").css("color", "red");
$("#heading").css("background-color", "black");

// Cách 2 : Viết gom vào
$("#heading").css({
    "color" : "#fff",
    "background-color" : "red"
})

// Truy cập vào nhiều phần tử để thay đổi css
$(".list li").each(function(index, element) {
    $(element).css("color", "blue")
})

// Cho thẻ li 1 thành màu đỏ
$(".list li").first().css("color", "red")

// Cho thẻ li 2 tăng font size
$(".list li").eq(1).css("font-size", "30px")

// Cho thẻ li 3 background màu xanh
$(".list li").last().css("background-color", "green")

// Lắng nghe sự kiện
$(".btn").click(function() {
    $("#heading").fadeToggle(3000, function() {
        $("body").css("background-color", "#ccc")
    })
})

// Thêm phần tử
// prepend : thêm vào đầu thằng cha
$(".list").prepend("<li>New item first</li>")

// append : thêm vào cuối thằng cha
$(".list").append("<li>New item last</li>")

// before : thêm vào trước
$(".list").before("<p>Thẻ p trước thẻ ul<p>")

// after : thêm vào sau
$(".list").after("<p>Thẻ p sau thẻ ul<p>")

// Xóa phần tử
// Xóa thẻ li ở vị trí có chỉ số là 2
$(".list li").eq(2).remove()

// Thao tác với class
$("#heading").addClass("text-uppercase")