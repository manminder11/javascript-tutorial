const Box = document.getElementById("CHB");
const R1 = document.getElementById("R1");
const R2 = document.getElementById("R2");
const R3 = document.getElementById("R3"); 
const R4 = document.getElementById("R4");
const R5 = document.getElementById("R5"); 
const P2 = document.getElementById("P1");
const P1 = document.getElementById("P2");
const B = document.getElementById("BGI");

// please assign the id carefully




B.onclick = function() {
    if(Box.checked){
        P1.textContent =   ' now you have the permission to fill the Blood Group info '
    }
    else {
     P1.textContent =   ' you dont have permission to do this please check the checkbox at top '
    }



    if(R1.checked){
        P2.textContent =   ' your blood group is A+ve'
    }
    else if (R2.checked) {
        P2.textContent =   ' your blood group is B+ve'
    }
    else if (R3.checked){
        P2.textContent =   ' your blood group is AB+ve'
    }
    else if (R4.checked){
        P2.textContent =   ' your blood group is AB-ve'
    }
    else if (R5.checked) {
        P2.textContent =   ' your blood group is O'
    }
    else {
        P2.textContent =   ' First please select the blood group'
    }

}










