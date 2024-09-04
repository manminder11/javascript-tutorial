const write  = document.getElementById("mytext");
const submit = document.getElementById("GPA");
const result = document.getElementById("result");


// never ever make your constants with the same name as ID

submit.onclick = function() {
    const gpa = Number(mytext.value); // Get the value from the input and convert it to a number
    
    if (gpa === 4) {
        result.textContent = "Your final grade is A+";
    } else if (gpa === 3) {
        result.textContent = "Your grade is B+";
    } else if (gpa === 2) {
        result.textContent = "Your grade is C+";
    } else if (gpa === 1) {
        result.textContent = "Your grade is D+";
    } else if (gpa <=0) {
        result.textContent = "Your grade is F and you have failed";
    }
};
