let length;
let width;

//function 
function Calculate_grocery() {
    Amount_1 = parseFloat(document.getElementById('grocery1').value);
    Amount_2 = parseFloat(document.getElementById('grocery2').value);
    Amount_3 = parseFloat(document.getElementById('grocery3').value);

    let Total_amount = Amount_1 + Amount_2 + Amount_3;//cal area

    document.getElementById('result').innerText = `The area of the rectangle is: ${Total_amount}`;
}