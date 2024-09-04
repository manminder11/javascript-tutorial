const mybutton = document.getElementById("mybutton");
const mylab = document.getElementById("mylab");
const min = 1;
const max = 6;
let randomnumber;

mybutton.onclick = function(){
    randomnumber = Math.floor(Math.random() * max) + min;
    mylab.textContent = randomnumber;
}