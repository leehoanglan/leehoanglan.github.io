function calculate() {
    var a = parseFloat(document.calcform.txta.value);
    var b = parseFloat(document.calcform.txtb.value);
    var operator = document.calcform.slto.value;
    var result;

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        result = a / b;
    } else {
        result = "Invalid operator";
    }

    //getElementById to set the result
    document.getElementById("result").innerText = result;
}