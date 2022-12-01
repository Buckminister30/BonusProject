function operation_equal(){
    let screenValueElement = document.getElementById("screen")
    if (previousOperation == "+"){
        operation_addition()
    }else if (previousOperation == "-"){
        operation_substraction()
    }else if (previousOperation == "/"){
        operation_division()
    }else if (previousOperation == "X"){
        operation_multiply()
    }
    previousOperation = "="
    screenValueElement.value = previousResult
    functionExecutedFlag = true
}