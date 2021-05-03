const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
function fibonacci(numero,counter,fn1,fn2){
    if (numero == 1){
        console.log("f(1) = 1")
        return 0
    }
    if (numero == 0){
        console.log("f(0) = 0")
        return 0
    }
    var actual = fn1 + fn2
    if (numero == counter){
        console.log('f(',numero,')=',actual)
        return 0
    }
    fn2 = fn1
    fn1 = actual
    counter += 1
    fibonacci(numero,counter,fn1,fn2)

}


  readline.question(`Ingrese numero de la serie a calcular: `, number => {
    readline.close()
    var fn1 = 1
    var fn2 = 0
    var counter = 2
    var numero = parseInt(number)
    if (numero < 0){
        console.log("Ingrese un numero valido")
    }
    else{
        fibonacci(numero,counter,fn1,fn2)
    }
    
  })

