//document.addEventListener('click', function() {
  //console.log('click');
 //})
 
 //document.addEventListener('mousedown', function() {
  //console.log('mousedown');
 ///})
 
 ///document.addEventListener('mousemove', function() {
 // console.log('mousemove');
 //})
 
 //document.addEventListener('mouseup', function() {
 // console.log('mouseup');
 //})
 //document.addEventListener('click', function (event) {
  //console.log(event);
//})
document.addEventListener('mousemove',function(event){
  const boxEl = document.querySelector(".box");
  if (boxEl){
    boxEl.parentNode.removeChild(boxEl);
  }


//document.addEventListener("click", function(event){
  let box = document.createElement("div")
  box.classList.add("box");

  let x = event.offsetX;
  let y = event.offsetY;

  box.style.top= `${y-50}px`;
  box.style.left= `${x-50}px`;

    document.body.appendChild(box)
});