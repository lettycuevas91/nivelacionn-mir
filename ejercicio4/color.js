function Calcularcolor(numero) {
    let color = 0
    if (numero == 1) {
        color = "black"
    } else if (numero == 2) {
        color = "blanco"
    } else if (numero == 3) {
        color = "azul"
    } else {
        color = "verde"
    }

    return "el color es " +color
}

console.log(Calcularcolor(1))
console.log(Calcularcolor(2))
console.log(Calcularcolor(3))
console.log(Calcularcolor(8))

