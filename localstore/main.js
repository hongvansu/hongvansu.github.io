if(typeof(Storage) !== "undefined") {
    console.log('Có hỗ trợ');
} else {
    console.log('Không hỗ trợ');
}

// Lưu data vào localStorage
localStorage.setItem('name', 'Ngô B');
localStorage.setItem('number', '1');
localStorage.setItem('isStatus', 'false');

let numbers = [1,2,3,4,5, 6]
let users = [
    {
        id : 1,
        name : "Nguyễn Văn A"
    },
    {
        id : 2,
        name : "Trần Thị C"
    }
]

localStorage.setItem("numbers", JSON.stringify(numbers))
localStorage.setItem("users", JSON.stringify(users))

// Lấy ra value
let name = localStorage.getItem('name');
console.log(name);

// Number
let numbersLocal = localStorage.getItem('numbers');
let numbersParse = JSON.parse(numbersLocal)

console.log(numbersLocal);
console.log(numbersParse);

// User
let usersLocal = localStorage.getItem('users');
let usersParse = JSON.parse(usersLocal)

console.log(usersLocal);
console.log(usersParse);

// Xóa
localStorage.removeItem('name');

// Xóa hết
localStorage.clear();

