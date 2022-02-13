var firstNumber = '';
var operator = '';
var nextOperator = '';
var secondNumber = '';
var result = '';
clearClicked = () => {
    firstNumber = '';
    operator = '';
    nextOperator = '';
    secondNumber = '';
    result = '';
    document.querySelector(".screen").innerText = "0";
}
clicked = (number) => {
    if (firstNumber.length == 0) {
        firstNumber = number.toString()
    } else if ((number != '+' && number != "-" && number != "*" && number != "/") && (operator.length == 0 && firstNumber.length >= 1)) {
        firstNumber += number.toString()
    } else if ((number == '+' || number == "-" || number == "*" || number == "/") && (operator.length == 0)) {
        operator = number;
    } else if ((operator.length > 0) && (number == '+' || number == "-" || number == "*" || number == "/")) {
        nextOperator = number;
    } else if (operator.length > 0 && secondNumber.length == 0) {
        secondNumber = number.toString();
    } else if ((number != '+' && number != "-" && number != "*" && number != "/") && (operator.length == 1 && secondNumber.length >= 1)) {
        secondNumber += number.toString();
    }
    if (nextOperator.length > 0 && operator == "+") {
        add();
        sync();
    }
    if (nextOperator.length > 0 && operator == "-") {
        sub();
        sync();
    }
    if (nextOperator.length > 0 && operator == "*") {
        prod();
        sync();
    }
    if (nextOperator.length > 0 && operator == "/") {
        div();
        sync();
    }
    document.querySelector(".screen").innerText = firstNumber + operator + secondNumber + nextOperator;
}
equaltoClicked = () => {
    if (operator == "+") {
        add();
        document.querySelector(".screen").innerText = result;
        equalsync()
    } else if (operator == "-") {
        sub();
        document.querySelector(".screen").innerText = result;
        equalsync();
    } else if (operator == "*") {
        prod();
        document.querySelector(".screen").innerText = result;
        equalsync();
    } else if (operator == "/") {
        div();
        document.querySelector(".screen").innerText = result;
        equalsync();
    }
}
add = () => {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
}
sub = () => { result = parseFloat(firstNumber) - parseFloat(secondNumber); }
prod = () => { result = parseFloat(firstNumber) * parseFloat(secondNumber); }
div = () => {
    result = parseFloat(firstNumber) / parseFloat(secondNumber);
    result = result.toFixed(3);
}
sync = () => {
    firstNumber = result;
    secondNumber = "";
    operator = nextOperator;
    nextOperator = "";
}
equalsync = () => {
    nextOperator = '';
    operator = '';
    firstNumber = result.toString();
    secondNumber = "";
    nextOperator = "";
}