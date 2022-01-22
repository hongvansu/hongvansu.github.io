// Sử dụng html attribute
function sayHello() {
    alert("Xin chào các bạn")
}

// Sử dụng DOM property
const btn2 = document.getElementById("btn-2");

// Function không có tên -> anonymous function
// btn2.onclick = function() {
//     alert("Xin chào các bạn 2")
// }

function sayHello2() {
    alert("Xin chào các bạn 2")
}

btn2.onclick = sayHello2;

// Sử dụng addEventListener
const btn3 = document.getElementById("btn-3");
// btn3.addEventListener("click", function() {
//     alert("Xin chào các bạn 3")
// })

function sayHello3() {
    alert("Xin chào các bạn 3")
}

btn3.addEventListener("click", sayHello3)

// vi du 

const btn4 = document.getElementById("btn-4");
btn4.addEventListener("click",function(){
    let color = randomColor();
    document.body.style.backgroundColor = color ;
})

function randomColor(){
    let arr = ["black","green","blue","yellow","pink"];
    let index = Math.floor(Math.random()* arr.length);
    return arr [index]
}