let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];
let colorsCopy = [...colors];

// Render box
function renderBox(arr) {
    let content = "";
    for (let i = 0; i < arr.length; i++) {
        content += `
            <div 
                class="box" 
                style="background-color: ${arr[i]}"
                onclick="deleteBox(${i})"
            >
            </div>`
        
    }
    $(".boxes").html(content)

    // Update số lượng box
    updateTotalBox(arr)
}

renderBox(colorsCopy)

// Update total box
function updateTotalBox(arr) {
    $(".points").text(arr.length)
}

// Thêm box
$("#btn").click(function() {
    colorsCopy = [...colorsCopy, ...colors]
    renderBox(colorsCopy)
})

// Xóa box
function deleteBox(index) {
    for (let i = 0; i < colorsCopy.length; i++) {
        if(i == index) {
            colorsCopy.splice(i, 1)
        }
    }
    renderBox(colorsCopy)
}