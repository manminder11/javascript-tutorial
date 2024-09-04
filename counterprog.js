const decrease = document.getElementById("D");
const reset = document.getElementById("R");
const increase = document.getElementById("I");
const label = document.getElementById("Countlabel");
let count = 0;


increase.onclick = function () {
    count++;
    label.textContent = count;

}

decrease.onclick = function () {
    count--;
    label.textContent = count;
}


reset.onclick = function () {
    count = 0;
 
    label.textContent =  "counter has been reset";

}
