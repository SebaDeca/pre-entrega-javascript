
const saludo = unaFuncion();
console.log(saludo);

function sumar(saldoActual, saldoIngresado) {
    let saldoEnCuenta = saldoActual + saldoIngresado;
    return saldoEnCuenta;
}

let recibidor = sumar(50000, 10000)
console.log(recibidor);

let calzadoGinoPavolli = {
    nombre: "Calzado negro Gino Pavolli",
    calzado: 41,
    precio: 15000,
    masculino: true,
};

let zapatoMarronPrince = {
    nombre: "Zapato marrón Prince",
    calzado: 38,
    precio: 23000,
    femenino: false,
};

console.log(calzadoGinoPavolli)
console.log(zapatoMarronPrince)

//ARRAYS 

let miArray = ["Camperas", "Remeras", "Pantalón", "Calzado"]

for (let i = 0; i < 4; i++) {
    let mostrar = miArray[i];
    console.log(mostrar);
}
