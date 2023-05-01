let nombreUsuario = prompt("Ingrese su usuario");

if (nombreUsuario == "") {

    alert("No ingresaste nombre de usuario");
} else {

    alert("El nombre de usuario es: " + nombreUsuario);
}

alert("Bienvenido al local de ropa Labasse mayorista");

let monto = parseInt(prompt("La compra al por mayor requiere de un monto mínimo de $50000, por favor confirme cual es el monto pretendido a consumir"));

while (monto < 50000) {
    alert("el monto " + monto + "$ Es menor al permitido, Le sugerimos visitar la página de venta al público")

    monto = prompt("Ingrese un nuevo monto")
}

function unaFuncion() {
    console.log("Bienvenido")
    return "Los mejores precios al por mayor";
}

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
