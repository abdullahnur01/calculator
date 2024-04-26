function calculator() {
    
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let operation = document.getElementById("operation").value;
    let successAlert= document.getElementById("success");
    let errorAlert = document.getElementById("error");
    let result;

    // show hide error and success section
    function alertMessage(success, message) {
        if(success == true){
            errorAlert.style.display="none";
            successAlert.style.display="block";
            successAlert.innerHTML = message;
        }else{
            errorAlert.style.display="block";
            successAlert.style.display="none";
            errorAlert.innerHTML = message;
        }
    }

    // Calculator validation and operation 

    if(number1==="" || number2===""){
        alertMessage(false, "Please fill in both number fields");
    }else{
         number1= Number(number1);
         number2= Number(number2);
         
        if(isNaN(number1) || isNaN(number2)){
            alertMessage(false, "Please enter a valid number");
        }else{
                if(operation=="+"){
                    result=number1+number2;
                }else if(operation=="-"){
                    result=number1-number2;
                }else if(operation=="*"){
                    result=number1*number2;
                }else if(operation=="/"){
                    if (number2 === 0) {
                        alertMessage(false, "Division by zero is not allowed");
                        return;
                    }else{
                        result=number1/number2;
                    }
                }else{
                    alertMessage(false, "Operation Not Found");
                    return;
                }

                if(!isFinite(result)){
                    alertMessage(false, "The result is not finite");
                }else{
                    alertMessage(true, "Result = " + result);
                }
        }
    }

};