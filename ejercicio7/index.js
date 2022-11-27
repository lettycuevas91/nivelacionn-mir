const receta = {};
receta.nombre = "sandwich";
receta.ingredientes = [];
receta.ingredientes.push({ nombre: "Pan", cantidad: 2 });
receta.ingredientes.push({ nombre: "Queso", cantidad: 1 });
console.log(receta);
console.log(receta.ingredientes[0].nombre);

function suma(arreglo) {
  let total = 0;
  for (let key in arreglo) {
    total = total + arreglo[key].cantidad;
  }
  return total;
}

console.log(suma(receta.ingredientes));