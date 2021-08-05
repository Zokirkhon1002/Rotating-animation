let open = document.getElementById('open');
let close = document.getElementById('close');
let container = document.querySelector(".container");
let body = document.querySelector("body");


open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));

setInterval(()=>{
    var random1 = Math.round(Math.random()*255);
    var random2 = Math.round(Math.random()*255);
    var random3 = Math.round(Math.random()*255);
function backgroundChanger(){
    body.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
}
backgroundChanger()
}, 500)






