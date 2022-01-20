function calculadora (operacion, num1, num2){

    switch(operacion){
        case"+":
            return num1+num2;
            break;
        case"-":
            return num1-num2;
            break;
        case"*":
            return num1*num2;
            break;
        case"/":
            return num1/num2;
                if (num2==0){
                    alert("No se puede dividir por cero");
                }
            break;
        default:
            console.log("No reconoce la operacion");
            return 0;
            break;
        
        
    }
}

calculadora("*",2,4);
calculadora("+",7,8);