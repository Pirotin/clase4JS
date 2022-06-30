



//le pide al usuario una letra

/*
var c = "c"
var a1 = "a"
var s = "s"
var a2 = "a"
*/

//esto es la base de un contador
// var numero = 0
// numero = numero + 3 // 1
// numero = numero + 3 // 1 + 1
// numero = numero + 3 // 2 + 1
// X = x-1

//operador de incremento ++

//operador de decremento --

// var vidas = 3


// var letra = prompt("ingrese la letra a adivinar")


// if(letra==c){

//     alert("Acertaste.. Excelente!!!")
    


// }else{

//     alert("has perdido una vida")
//    vidas--

// }

// letra = prompt("ingrese la letra a adivinar")

// if(letra==a1){

//     alert("Acertaste.. Excelente!!!")
    


// }else{

//     alert("lo siento otra oportunidad")
//    vidas--

// }

// letra = prompt("ingrese la letra a adivinar")

// if(letra==s){

//     alert("Acertaste.. Excelente!!!")
   


// }else{

//     alert("lo siento otra oportunidad")
//     vidas--
// }

// letra = prompt("ingrese la letra a adivinar")

// if(letra==a2){

//     alert("Acertaste.. Excelente!!!")
    


// }else{

//     alert("lo siento otra oportunidad")
//     vidas--

// }

// console.log("el total de vidas es: " + vidas)
// alert("el total de vidas es:" + vidas)

// var lunes = 1

// var martes = 2

// var miercoles = 3

// var jueves = 4

// var viernes = 5




// if(dia==1){
//     console.log("primera condicion: es lunes" )
// }else if(dia==2){
//     console.log("el tambien si...: es martes")
// }else if(dia==3){
//     console.log("es miercoles")
// }else if(dia==4){
//     console.log("es jueves")
// }else if(dia==5){
//     console.log("es viernes")
// }
// else{

//     console.log("no se ejecuta")
// }

var saldo = 5000

var opcion = prompt("Ingrese una opcion a realizar: [1 Retirar] [2 Ingresar] [3 Saldo] [4 Enviar]")

switch(opcion){
    case "1":
        alert("Retirar dinero")
        if(saldo==0){
        alert("Ud no posee saldo suficiente para realizar esta operación")
        } else {
        console.log("Puede retirar dinero")
        var retirar = parseFloat(prompt("Ingrese el monto que desea retirar"))
        }
        if(retirar<=saldo){
        console.log("puede retirar cash$$")
        alert("Puede retirar su dinero")
        saldo = saldo - retirar
        alert("Su saldo actual es: $" + saldo + ".-")
        } else {
        alert("El monto ingresado excede el saldo en su cuenta. Su saldo es: $" + saldo + ".-")
        //alert("Espere a principio de mes. Su saldo es: " + saldo + ".-")
        console.log("Puede esperar a fin de mes o ingresar dinero a la cuenta")
        }
        break

    case "2":
        alert("Ingresar dinero")
        var bolsillo = parseFloat(prompt("Ingrese el monto que desea depositar"));
        
        if(bolsillo>=100000){
        alert("Operación no válida. Para ingresar el monto indicado consulte a su banco.")
        console.log("Operación no válida. Para ingresar el monto indicado consulte a su banco.")
        } else if (bolsillo>0) {
        saldo = saldo + bolsillo
        alert("El dinero ha sido acreditado correctamente. Su saldo actual es: " + saldo + ".-")
        console.log("Operación habilitada. Saldo ingresado: $" + bolsillo + ".-")
        } else {
        alert("El saldo ingresado no es válido. Intentelo nuevamente.")
        console.log("El saldo ingresado no es válido. Intentelo nuevamente.")
        }
        break

    case "3":
        alert("Consultar saldo")
        if(saldo>0){
        console.log("Operación habilitada: Consultar Saldo")
        alert("Su saldo es: $" + saldo + ".-")
        } else {
        console.log("El saldo actual es $0.-")
        console.log("Puede esperar a fin de mes o ingresar dinero a la cuenta")
        alert("Su saldo actual es $0.-")
        }
        break

    case "4":
        alert("Enviar dinero")
        //alert("Ya puede enviar dinero. Sin embargo debe ser igual o menor a: " + saldo + ".-")
        if(saldo==0){
        console.log("Operación inválida: No posee saldo suficiente.")
        alert("Ud no posee saldo suficiente para realizar esta operación.")
        } else {
        alert("Ya puede enviar dinero")
        alert("El monto que desee enviar debe ser igual o menor a su saldo que es: " + saldo + ".-")
        var enviarDinero = parseFloat(prompt("Ingrese el monto que desea enviar."))
        }
        if (enviarDinero==0){
        alert("Operacion no válida. El monto ingresado no es válido.")
        console.log("Operacion no válida. El monto ingresado no es válido.")
        } else if (enviarDinero<=saldo){
        console.log("Operación habilitada: enviar dinero")
        var destinoTransferencia = prompt("Ingrese el CBU o Alias a quien quiere enviar dinero.")
        alert ("Se ha enviado $" + enviarDinero +".- al CBU/Alias: [" + destinoTransferencia + "]")
        saldo = saldo - enviarDinero
        alert("Su saldo actual es: $" + saldo + ".-")
        } else {
        alert("Operacion no válida. El saldo ingresado no es válido.")
        console.log("Operacion no válida. El saldo ingresado no es válido.")
        }
        break

    default:
        alert("No ha elegido ninguna opción")
        console.log("No ha elegido ninguna opción")
        alert("Su saldo actual es: " + saldo + ".-");
        break
}


//alert("Su saldo actual es: " + saldo + ".-");

































