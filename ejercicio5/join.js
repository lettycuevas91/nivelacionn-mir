function join(arreglo) {
    if (arreglo.length === 0) return `""`;
    let cadenafinal = "";
    for (const cadena in arreglo) {
        cadenafinal = cadenafinal +  `${arreglo[cadena]} `;
    }
    return cadenafinal;
  }
  
  console.log(join(["Hola", "Mundo"]));
  console.log(join(["Make", "It", "Real"]));
  console.log(join([]));