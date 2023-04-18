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