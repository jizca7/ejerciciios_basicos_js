function greaterNumber(numberOne , numberTwo) {
  // Completar código
}
numberOne = 28;
numberTwo = 17;
greaterNumber(numberOne, numberTwo);
function greaterNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        console.log("El número mayor es: " + numberOne); 
    } else if (numberTwo > numberOne) {
        console.log("El número mayor es: " + numberTwo);
    } else {
        console.log("Los dos números son iguales");
    }
}